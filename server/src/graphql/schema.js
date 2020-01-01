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
type Status {
    message: String
}

type Chirp {
    _id: ID!
    text: String!
}

type Query {
    getChirp(_id: ID!): Chirp
    getChirps: [Chirp]
}

type Mutation {
    createChirp(text: String!): Chirp
    updateChirp(_id: ID!, text: String, email: String): Chirp
    deleteChirp(_id: ID!): Status
}

schema {
    query: Query
    mutation: Mutation
}`;

export default typeDefs;
