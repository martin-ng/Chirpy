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
type Chirp {
    _id: String
    text: String
}

type Query {
    getChirps: [Chirp]
}

schema {
    query: Query
}`;

export default typeDefs;
