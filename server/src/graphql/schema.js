// export default `
//     type Chirp {
//         _id: String
//         text: String
//     }

//     type Query {
//         getChirps: [Chirp]
//     }

//     schema {
//         query: Query
//     }
// `;

const typeDefs = `
scalar Date

type Status {
    message: String
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

type Chirp {
    _id: ID!
    text: String!
    createdAt: Date!
    updatedAt: Date!

}

type Query {
    getChirp(_id: ID!): Chirp
    getChirps: [Chirp]
}

type Mutation {
    createChirp(text: String!): Chirp
    updateChirp(_id: ID!, text: String, email: String): Chirp
    deleteChirp(_id: ID!): Status
    signup(email: String!, fullName: String!, password: String!, avatar: String, username: String): User
}

schema {
    query: Query
    mutation: Mutation
}`;

export default typeDefs;
