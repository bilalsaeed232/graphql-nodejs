import {
    buildSchema
} from 'graphql';

const schema = buildSchema(`
    type Friend {
        id: ID
        firstName: String!
        lastName: String
        gender: Gender
        age: Int
        language: String
        email: String
        contacts: [Contact]
    }

    type Contact {
        firstName: String
        lastName: String
        phoneNumber: String
    }

    enum Gender {
        MALE
        FEMALE
        OTHER
    }

    type Query {
        getFriend(id: ID): Friend
        hello: String
    }



    #thats how to define input for mutation
    input FriendInput {
        id: ID
        firstName: String!
        lastName: String
        gender: Gender
        age: Int
        language: String
        email: String
        contacts: [ContactInput]
    }

    #we need another input type for Mutation
    input ContactInput {
        firstName: String
        lastName: String
        phoneNumber: String
    }

    type Mutation {
        createFriend(input: FriendInput): Friend
    }
`);


export default schema;