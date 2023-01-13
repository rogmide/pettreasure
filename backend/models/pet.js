"use strict";

const db = require("../db");
const { NotFoundError } = require("../expressError");
const { sqlForPartialUpdate } = require("../helpers/sql");
const { api_request } = require("../helpers/Api_Helper");

class Pet {
  static async getRandomPet() {
    try {
      const pets = api_request("animals");
    } catch (error) {}

    return "";
  }
}

module.exports = Pet;
