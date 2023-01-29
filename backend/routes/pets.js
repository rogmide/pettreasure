"use strict";

const jsonschema = require("jsonschema");

const express = require("express");
const { BadRequestError } = require("../expressError");
const { ensureAdmin } = require("../middleware/auth");
const Pet = require("../models/pet");

const router = express.Router({ mergeParams: true });

router.get("/random", async function (req, res, next) {
  const { limit, type } = req.query;
  try {
    const pets = await Pet.getRandomPet(limit, type);
    return res.json({ pets });
  } catch (err) {
    return next(err);
  }
});

router.get("/pet", async function (req, res, next) {
  const { pet_id } = req.query;
  try {
    const pets = await Pet.getPetById(pet_id);
    return res.json({ pets });
  } catch (err) {
    return next(err);
  }
});

router.get("/gallery", async function (req, res, next) {
  const { limit, type, page, location } = req.query;
  try {
    const pets = await Pet.getPetGallery(limit, type, page, location);
    return res.json({ pets });
  } catch (err) {
    return next(err);
  }
});

router.get("/galleryfororg", async function (req, res, next) {
  const { limit, org_id } = req.query;
  try {
    const pets = await Pet.galleryForOrg(limit, org_id);
    return res.json({ pets });
  } catch (err) {
    return next(err);
  }
});

router.get("/isfavorite", async function (req, res, next) {
  const { user_id, pet_id } = req.query;
  try {
    const pets = await Pet.getIsFavorite(user_id, pet_id);
    return res.json({ pets });
  } catch (err) {
    return next(err);
  }
});

router.get("/setfavorite", async function (req, res, next) {
  const { user_id, pet_id } = req.query;
  try {
    const pets = await Pet.setIsFavorite(user_id, pet_id);
    return res.json({ pets });
  } catch (err) {
    return next(err);
  }
});

router.get("/removefavorite", async function (req, res, next) {
  const { user_id, pet_id } = req.query;
  try {
    const pets = await Pet.removeFavorite(user_id, pet_id);
    return res.json({ pets });
  } catch (err) {
    return next(err);
  }
});

router.get("/allfavoritepet", async function (req, res, next) {
  const { user_id } = req.query;
  try {
    const pets = await Pet.GetAllFavoritePet(user_id);
    return res.json({ pets });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
