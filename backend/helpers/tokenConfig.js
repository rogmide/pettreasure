"use strict";

const db = require("../db");
const { NotFoundError } = require("../expressError");
const { sqlForPartialUpdate } = require("../helpers/sql");

/** Function to update token in case of expire */

class TokenConfig {
  static async create(data) {
    // const api_key = await db.query

    const result = await db.query(
      `INSERT INTO jobs (title,
                             salary,
                             equity,
                             company_handle)
           VALUES ($1, $2, $3, $4)
           RETURNING id, title, salary, equity, company_handle AS "companyHandle"`,
      [data.title, data.salary, data.equity, data.companyHandle]
    );
    let job = result.rows[0];

    return job;
  }
}

module.exports = TokenConfig;
