const userResolvers = require('./userResolvers');
const videoResolvers = require('./videoResolvers');
const commentResolvers = require('./commentResolvers');

module.exports = {
    Query: {
        ...userResolvers.Query,
        ...videoResolvers.Query,
        ...commentResolvers.Query,
    },
    Mutation: {
        ...userResolvers.Mutation,
        ...videoResolvers.Mutation,
        ...commentResolvers.Mutation,
    },
};



