const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username!"],
    unique: false,
  },
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
  },
  role: {
    type: Number,
    required: [true, "Role Number!"],
    unique: false,
  },
  password: {
    type: String,
    required: [true, "Please provide a password!"],
    unique: false,
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

// export model user with UserSchema
module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);