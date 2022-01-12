//import the gql tagged template function
const { gql } = require('apollo-server-express')


type Thought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
}

//create our typeDefs
const typeDefs = gql`
type Query {
    thoughts: [Thought]
}`;

//export the typeDefs
module.exports = typeDefs