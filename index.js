import express from 'express';
import graphqlHTTP from 'express-graphql';

import schema from './schema';

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send("Graphql is amazing...");
});

const root = {
    hello: () => "Hi, my name is Bilal..",
    friend: () => {
        return {
            "id": 232,
            "firstName": "Bilal",
            "lastName": "Saeed",
            "gender": "Male",
            "language": "English",
            "emails": [{
                    "email": "bilal@gmail.com"
                },
                {
                    "email": "umair@gmail.com"
                },
                {
                    "email": "waqas@gmail.com"
                }
            ]
        }
    }
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(port, () => {
    console.log(`Server started on localhost:${port}/graphql`);
});