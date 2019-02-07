import express from 'express';
import graphqlHTTP from 'express-graphql';

import schema from './schema';

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send("Graphql is amazing...");
});


class Friend {
    constructor(id, {
        firstName,
        lastName,
        gender,
        language,
        email
    }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.language = language;
        this.email = email;
    }
}


const friendDatabase = {};


const root = {
    hello: () => "Hi, my name is Bilal..",
    friend: () => {
        return {
            "id": 232,
            "firstName": "Bilal",
            "lastName": "Saeed",
            "gender": "Male",
            "language": "English",
            "email": "bilal@gmail.com"
        }
    },
    createFriend: ({
        input
    }) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        friendDatabase[id] = input;
        return new Friend(id, input);
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