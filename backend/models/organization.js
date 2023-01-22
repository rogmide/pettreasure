"use strict";

const db = require("../db");
const { NotFoundError } = require("../expressError");
const { sqlForPartialUpdate } = require("../helpers/sql");
const { api_request, updateApiToken } = require("../helpers/Api_Helper");

class Organization {
  static async getOrganizationById(org_id) {
    try {
      const resp = await api_request(`organizations/${org_id}`);
      return resp.organization;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Organization;
