const typeDefs = `
scalar Date

type Status {
    message: String
}

type Auth {
    token: String!
}

type User {
    _id: ID!
    username: String
    email: String!
    firstName: String
    lastName: String
    avatar: String
    createdAt: Date!
    updatedAt: Date!
}

type Me {
    _id: ID!
    username: String
    email: String!
    firstName: String
    lastName: String
    avatar: String
    createdAt: Date!
    updatedAt: Date!
}

type Chirp {
    _id: ID!
    text: String!
    createdAt: Date!
    updatedAt: Date!
}

type Query {
    getChirp(_id: ID!): Chirp
    getChirps: [Chirp]
    me: Me
}

type Mutation {
    createChirp(text: String!): Chirp
    updateChirp(_id: ID!, text: String, email: String): Chirp
    deleteChirp(_id: ID!): Status
    signup(email: String!, fullName: String!, password: String!, avatar: String, username: String): Auth
    login(email: String!, password: String!): Auth
}

schema {
    query: Query
    mutation: Mutation
}`;

export default typeDefs;
