import * as Express from 'express';
import * as graphqlhttp from 'express-graphql';
import schema from './graphql/schema';

const express = Express();

// Middleware configuration
express.use("/graphql", graphqlhttp({
    // Our schema
    schema
    // Enable the GraphiQL Mode in development mode
    , graphiql: process.env.NODE_ENV === 'development'
}));


export default express;