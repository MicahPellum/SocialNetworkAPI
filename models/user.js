const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: "Please provide a Username",
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: "Please provide a valid email",
      unique: true,
      match: [/.+@.+..+/],
    },
    thoughts: [
      {
        type: String,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: String,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

UserSchema.virtual("thoughtCount").get(function () {
  return this.thoughts.length;
});

const User = model("User", UserSchema);


module.exports = User;