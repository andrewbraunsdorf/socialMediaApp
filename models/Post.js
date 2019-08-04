const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
// Each Post should have name and avatar
// Want Name and Avatar even to appear if the account is deleted from the account
// there are valuable posts/ comments and dont want them to disappear
const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  text: {
    type: String,
    required: true
  },
  // User does not have to enter, will be fulfilled programatically
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  // only want userid to appear in array, that way they cant like multiple times
  // will be array of objects
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      }
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Post = mongoose.model("post", PostSchema);
