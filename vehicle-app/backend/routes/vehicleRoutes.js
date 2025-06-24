const express = require("express");
const router = express.Router();
const Vehicle = require("../models/Vehicle");

router.get("/", (req, res) => {
  const vehicles = Vehicle.getAll();
  res.render("index", { vehicles });
});

router.post("/add", (req, res) => {
  Vehicle.create(req.body);
  res.redirect("/");
});

router.get("/edit/:id", (req, res) => {
  const vehicle = Vehicle.getById(req.params.id);
  res.render("edit", { vehicle });
});

router.post("/update/:id", (req, res) => {
  Vehicle.update(req.params.id, req.body);
  res.redirect("/");
});

router.post("/delete/:id", (req, res) => {
  Vehicle.delete(req.params.id);
  res.redirect("/");
});

module.exports = router;
