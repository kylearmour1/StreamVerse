const { Schema, model} = require('mongoose');

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: 'You must enter a name.',
        trim: true,
    },
    lastName: {
        type: String,
        required: 'You must enter a name.',
        trim: true,
    },
    userName: {
        type: String,
        required: 'Enter a Username',
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
      },
      videos: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Video',
      },
    ],
});

