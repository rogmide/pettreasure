"use strict";

const db = require("../db");
const { NotFoundError } = require("../expressError");
const { sqlForPartialUpdate } = require("../helpers/sql");
const { api_request, updateApiToken } = require("../helpers/Api_Helper");

class Pet {
  // ########################################################################
  // getRandomPet get a random pet from the API
  //
  // Params:
  //      limit: is the limit of pet that the request is going to bring back default 1
  //      animals: is the type of animal that the request is going to bring back
  //               default is a random animal from ["dog", "cat", "bird"].

  static async getRandomPet(
    limit = 1,
    animals = ["dog", "cat", "bird"].sort(() => 0.5 - Math.random())[0]
  ) {
    console.log(limit);
    console.log(animals);
    try {
      // const animals = ["dog", "cat", "bird"].sort(() => 0.5 - Math.random());

      const reps = await api_request("animals", {
        type: animals === "NoType" ? "" : animals,
        page: Math.floor(Math.random() * 20 + 1),
        sort: "random",
        limit: limit,
      });

      return reps.animals;
    } catch (error) {
      console.log(error);
    }
  }

  static async getPetById(pet_id) {
    try {
      const reps = await api_request(`animals/${pet_id}`);
      return reps.animal;
    } catch (error) {
      console.log(error);
    }
  }

  // ########################################################################
  // Get pet list from the API,
  // Params:
  //      limit: is the limit of pet that the request is going to bring back default 1
  //      animals: is the type of animal that the request is going to bring back
  //               default is a dog, but in this case should never go to default
  //      page: is the page that is going to request starting 1, then 2,3,4...
  //            this is done that way we can load more pet and not do a big 100 pet request
  //            we call 20 pet at the time from the API
  //      location: location is the location that the user enter to show pet that are close to
  //                his/her zip code

  static async getPetGallery(
    limit = 20,
    animals = "dog",
    page,
    location = null
  ) {
    try {
      if (location) {
        const reps = await api_request("animals", {
          type: animals,
          page: page,
          limit: limit,
          sort: "distance",
          location: location,
        });
        return reps.animals;
      } else {
        const reps = await api_request("animals", {
          type: animals,
          page: page,
          limit: limit,
        });
        return reps.animals;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Pet;
