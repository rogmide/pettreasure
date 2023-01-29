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

  // Get the favorite pet from local DB
  static async getIsFavorite(user_id, pet_id) {
    const favPets = await db.query(
      `SELECT user_id, pet_id
             FROM favorite
             WHERE user_id = $1 and pet_id = $2`,
      [user_id, pet_id]
    );

    const fav = favPets.rows[0];

    return fav;
  }

  // Get the all favorite pets from local DB
  static async GetAllFavoritePet(user_id) {
    const favPets = await db.query(
      `SELECT user_id, pet_id
             FROM favorite
             WHERE user_id = $1`,
      [user_id]
    );

    const fav = favPets.rows;

    return fav;
  }

  // Add Favorite pet to local DB
  static async setIsFavorite(user_id, pet_id) {
    const favPets = await db.query(
      `INSERT INTO favorite (user_id, pet_id)
       VALUES ($1, $2) 
       RETURNING user_id, pet_id`,
      [user_id, pet_id]
    );

    const fav = favPets.rows[0];

    return fav;
  }
  // Add Favorite pet to local DB
  static async removeFavorite(user_id, pet_id) {
    const result = await db.query(
      `DELETE
       FROM favorite
       WHERE user_id = $1 and pet_id = $2
       RETURNING user_id, pet_id`,
      [user_id, pet_id]
    );
    const resp = result.rows[0];

    if (!resp) throw new NotFoundError(`No Fav Pet Found: ${pet_id}`);
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

  //
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

  static async galleryForOrg(limit, org_id) {
    try {
      const reps = await api_request(`animals`, {
        limit: limit,
        organization: org_id,
      });

      return reps.animals;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Pet;
