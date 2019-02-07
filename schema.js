import {
    buildSchema
} from 'graphql';

const schema = buildSchema(`
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: String
        language: String
        email: String
    }

    type Query {
        friend: Friend
        hello: String
    }
`);


export default schema;