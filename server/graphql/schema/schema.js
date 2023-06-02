const { gql } = require('apollo-server-express')
const typeDefs = gql`
    type User {
        id: ID!
        username: String!
        email: String!
        videos: [Video]
    }

    type Video {
        id: ID!
        title: String!
        description: String
        url: String!
        comments: [Comment]
    }
    type Comment {
    id: ID!
    text: String!
    video: Video!
    user: User!
}


type Query {
    user(id: ID!): User
    users: [User]
    video(id: ID!): Video
    videos: [Video]
    comment(id: ID!): Comment
    comments: [Comment]
}




type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    addVideo(userId: ID!, title: String!, description: String, url: String!): Video
    addComment(userId: ID!, videoId: ID!, text: String!): Comment
    login(email: String!, password: String!): User
    # Further mutations for updating and deleting
}

`;

module.exports = typeDefs;
