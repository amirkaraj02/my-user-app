const mongose = require("mongoose");


const Schema = mongose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  surname: {
    type: String,
    required: true,
    trim: true,
  },
  personalPhone: {
    type: Number,
    required: true,
    trim: true,
  },
  workPhone: {
    type: Number,
    required: true,
    trim: true,
  },
});

const User = mongose.model("users", userSchema);
module.exports = User;