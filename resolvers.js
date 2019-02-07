class Friend {
    constructor(id, {
        firstName,
        lastName,
        gender,
        age,
        language,
        email
    }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.language = language;
        this.email = email;
    }
}


const friendDatabase = {};


const resolvers = {
    hello: () => "Hi, my name is Bilal..",
    getFriend: ({
        id
    }) => {
        console.log(typeof id);
        console.dir(friendDatabase);
        return new Friend(id, friendDatabase[id]);
    },
    createFriend: ({
        input
    }) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        friendDatabase[id] = input;
        console.log(`creating friend ${friendDatabase[id].firstName} of age ${friendDatabase[id].age}`);
        return new Friend(id, input);
    }

};


export default resolvers;