
const Comment = require('../../models/Comment');

const commentResolvers = {
    Query: {
        comment: async (parent, { id }) => {
            return await Comment.findById(id);
        },
        comments: async () => {
            return await Comment.find();
        },
    },
    Mutation: {
        addComment: async (parent, { text, userId, videoId }) => {
            const comment = new Comment({ text, userId, videoId });
            return await comment.save();
        },
        // Additional mutations for updating and deleting comments
    },
};

module.exports = commentResolvers;


