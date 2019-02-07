import express from 'express';
import graphqlHTTP from 'express-graphql';

import {
    schema
} from './schema';


const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send("Graphql is amazing...");
});


app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(port, () => {
    console.log(`Server started on localhost:${port}/graphql`);
});