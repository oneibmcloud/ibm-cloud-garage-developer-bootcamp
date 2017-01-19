import mongoose from 'mongoose';
import {PostSchema} from './post-schema';
const Schema = mongoose.Schema;

const YES = true;

const UserSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: name => name.length > 2,
      message: 'Name must be longer than 2.'
    },
    required: [YES, 'Name is required.']
  },
  posts: [PostSchema],
  likes: Number
});

UserSchema.virtual('postCount').get(function() {
  return this.posts.length;
});

const User = mongoose.model('user', UserSchema);

export {User};
