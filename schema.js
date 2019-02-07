import {
    buildSchema
} from 'graphql';

const schema = buildSchema(`
    type Friend {
        id: ID
        firstName: String!
        lastName: String
        gender: String
        language: String
        email: String
    }

    type Query {
        friend: Friend
        hello: String
    }



    #thats how to define input for mutation
    input FriendInput {
        id: ID
        firstName: String!
        lastName: String
        gender: String
        language: String
        email: String
    }

    type Mutation {
        createFriend(input: FriendInput): Friend
    }
`);


export default schema;