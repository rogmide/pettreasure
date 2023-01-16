"use strict";

/** Routes for jobs. */

const jsonschema = require("jsonschema");

const express = require("express");
const { BadRequestError } = require("../expressError");
const { ensureAdmin } = require("../middleware/auth");
const Pet = require("../models/pet");

const router = express.Router({ mergeParams: true });

router.get("/random", async function (req, res, next) {
  try {
    const pets = await Pet.getRandomPet(req.query.limit);
    return res.json({ pets });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
