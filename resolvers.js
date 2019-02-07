class Friend {
    constructor(id, {
        firstName,
        lastName,
        gender,
        age,
        language,
        email,
        contacts
    }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.language = language;
        this.email = email;
        this.contacts = contacts
    }
}


const friendDatabase = {};


// resolver map
export const resolvers = {
    Query: {
        hello: () => "Hi, my name is Bilal..",
        getFriend: ({
            id
        }) => {
            console.log(typeof id);
            console.dir(friendDatabase);
            return new Friend(id, friendDatabase[id]);
        },
    },
    Mutation: {
        createFriend: ({
            input
        }) => {
            let id = require('crypto').randomBytes(10).toString('hex');
            friendDatabase[id] = input;
            console.log(`creating friend ${friendDatabase[id].firstName} of age ${friendDatabase[id].age}`);
            return new Friend(id, input);
        },
    },
};