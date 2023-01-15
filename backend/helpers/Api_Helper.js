"use strict";

const db = require("../db");
const axios = require("axios");
const { NotFoundError } = require("../expressError");
const BASE_URL = "https://api.petfinder.com/v2/";

/** Function to update token in case of expire */

class Api_Helper {
  static async api_request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const token_data = await db.query(
      "SELECT api_key, secret_key, api_token from config"
    );
    let { api_token } = token_data.rows[0];
    console.log(api_token);

    const url = `${BASE_URL}${endpoint}`;
    const headers = { Authorization: `Bearer ${api_token}` };
    const params = method === "get" ? data : {};

    try {
      if (method === "post") {
        return (await axios({ url, method, params, data, headers })).data;
      } else {
        return (await axios({ url, method, params, headers })).data;
      }
    } catch (err) {
      console.error("API Error:", err.response);
      if (err.response.status === 403) {
        await Api_Helper.updateApiToken();
      }
      if (err.response.status === 401) {
        await Api_Helper.updateApiToken();
      }
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getApiToken() {
    const result = await db.query(
      "SELECT api_key, secret_key, api_token from config"
    );

    let { api_token } = result.rows[0];

    return api_token;
  }

  static async updateApiToken() {
    // Getting current information,{ api_key, secret_key } from DataBase
    // To be use to get a new Api token

    const configData = await db.query(
      "SELECT api_key, secret_key, api_token from config"
    );

    const { api_key, secret_key } = configData.rows[0];
    const api_token_call_data = {
      grant_type: "client_credentials",
      client_id: api_key,
      client_secret: secret_key,
    };

    // Getting a new token from API and Updating the Token in DataBase
    try {
      const data = await Api_Helper.api_request(
        "oauth2/token",
        api_token_call_data,
        "post"
      );

      const result = await db.query(
        `UPDATE config set api_token = '${data.access_token}' RETURNING api_token`
      );
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Api_Helper;
