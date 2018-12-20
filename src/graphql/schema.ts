import { makeExecutableSchema } from 'graphql-tools';

interface IUser {
    id: number;
    name: string;
    email: string
}

class User {
    public id: number;
    public name: string;
    public email: string

    constructor(user: IUser) {
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
    }
}

const users: User[] = [
    new User({ id: 1, name: "George", email: "george@mail.com" }),
    new User({ id: 2, name: "Tina", email: "tina@mail.com" })
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

    type Mutation {
        createUser(name: String!, email: String!): User
    }
`;

const resolvers = {
    // This is a trivial resolver. It doesn't have to be implemented,
    // because it only has primitive type fields, but this is a sample
    // of how trivial resolvers are implemented.
    User: {
        id: (user: IUser) => user.id,
        name: (user: IUser) => user.name,
        email: (user: IUser) => user.email
    },
    Query: {
        allUsers: () => users
    },
    Mutation: {
        createUser: (parent, args: IUser) => {
            const newUser = new User({ ...args, id: users.length + 1 });
            users.push(newUser);
            return newUser;
        }
    }
}

// Return an executable GraphQL schema
export default makeExecutableSchema({ typeDefs, resolvers })