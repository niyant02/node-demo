import dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import express from 'express';
import { schema } from './schema';
import { createContext } from './context';
import cors from 'cors';

dotenv.config();

const { PORT = 4000 } = process.env;
const app = express();
const server = createServer(app);
const apollo = new ApolloServer({
    schema,
    context: createContext,
});

app.use(cors());

apollo.applyMiddleware({ app, path: '/' });

server.listen({ port: PORT }, () => {
    process.stdout.write(`\n🚀 Server ready at http://localhost:${PORT}${apollo.graphqlPath}\n\n`);
});
