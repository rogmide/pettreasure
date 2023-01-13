"use strict";

const db = require("../db");
const { NotFoundError } = require("../expressError");
const { sqlForPartialUpdate } = require("../helpers/sql");
const { api_request, updateApiToken } = require("../helpers/Api_Helper");

class Pet {
  static async getRandomPet() {
    try {
      const pets = await api_request("animals", { type: "cat", page: 2 });
      console.log(pets);

      //   console.log(pets.status);
      //   return pets;
    } catch (error) {
      //   console.log(error);
    }
  }
}

module.exports = Pet;
