"use strict";

const db = require("../db");
const axios = require("axios");
const { NotFoundError } = require("../expressError");
const BASE_URL = "https://api.petfinder.com/v2/";
let CURRENT_TOKEN = "TOKEN";

/** Function to update token in case of expire */

class Api_Helper {
  static async api_request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${CURRENT_TOKEN}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getApiToken() {
    const result = await db.query(
      "SELECT api_key, secret_key, api_token from config"
    );

    let { api_token } = result.rows[0];
    CURRENT_TOKEN = api_token;
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
      const data = await this.api_request(
        "oauth2/token",
        api_token_call_data,
        "post"
      );
      // console.log(data.access_token);
      const result = await db.query(
        `UPDATE config set api_token = '${data.access_token}' RETURNING api_token`
      );

      // Getting to token that the Api_request is going to work!
      CURRENT_TOKEN = result.rows[0].api_token;
    } catch (error) {}
  }
}

module.exports = Api_Helper;
