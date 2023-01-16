"use strict";

const db = require("../db");
const { NotFoundError } = require("../expressError");
const { sqlForPartialUpdate } = require("../helpers/sql");
const { api_request, updateApiToken } = require("../helpers/Api_Helper");

class Pet {
  static async getRandomPet(limit = 1) {
    console.log(limit)
    try {
      const animals = ["dog", "cat", "bird"].sort(() => 0.5 - Math.random());

      const reps = await api_request("animals", {
        type: animals[0],
        page: Math.floor(Math.random() * 20 + 1),
        sort: "random",
        limit: limit,
      });

      return reps.animals;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Pet;
