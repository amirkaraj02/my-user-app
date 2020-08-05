const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const surname = req.body.surname;
  const personalPhone = req.body.personalPhone;
  const workPhone = req.body.workPhone;

  const newUser = new User({
    name,
    surname,
    personalPhone,
    workPhone,
  });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json(err.message));
});

module.exports = router;