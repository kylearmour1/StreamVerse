const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const videoSchema = new Schema({
    title: {
        type: String,
        required: "Enter a title",
        minLength: 1,
        unique: true,
        maxLength: 50,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    url: {
        type: String,
        trim: true,
    },
    uploadDate: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    comments: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
    },
],
});

const Video = model("Video", videoSchema);

module.exports = Video;