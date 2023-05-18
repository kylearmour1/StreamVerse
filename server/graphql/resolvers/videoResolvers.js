const Video = require('../../models/Video');

const videoResolvers = {
    Query: {
        video: async (parent, { id }) => {
            return await Video.findById(id);
        },
        videos: async () => {
            return await Video.find();
        },
    },
    Mutation: {
        addVideo: async (parent, { title, description, url, userId }) => {
            const video = new Video({ title, description, url, userId });
            return await video.save();
        },
        // Additional mutations for updating and deleting videos
    },
};

module.exports = videoResolvers;
