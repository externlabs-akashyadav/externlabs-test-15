const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
  },
  {
    collection: "pannel-extern",
  }
);

const model = mongoose.model("UserSchema", UserSchema);

module.exports = model;
