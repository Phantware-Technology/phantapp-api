const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
  {
    name: { type: String, required: true, minlength: 3, maxlength: 30 },
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 200,
    },
    password: { type: String, minlength: 3, maxlength: 1024, required: true },
  },
  { timestamps: true }
)

const userModel = mongoose.model('User', UserSchema)
module.exports = userModel
