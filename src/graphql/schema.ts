import { makeExecutableSchema } from 'graphql-tools';

class User {
    constructor(public id: number, public name: string, public email: string) { }
}

const users: User[] = [
    new User(1, "George", "george@mail.com"),
    new User(2, "Tina", "tina@mail.com")
];

const typeDefs = `
    type User {
        id: ID!
        name: String!
        email: String!
    }

    type Query {
        allUsers: [User!]!
    }
`;

const resolvers = {
    Query: {
        allUsers: () => users
    }
}

// Return a GraphQL schema
export default makeExecutableSchema({ typeDefs, resolvers })