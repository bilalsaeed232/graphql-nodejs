import {
    Friends
} from './dbConnectors';
import {
    rejects
} from 'assert';

// resolver map
export const resolvers = {
    Query: {
        hello: () => "Hi, my name is Bilal..",
        getFriend: (root, {
            id
        }) => {
            console.log(typeof id);
            console.dir(friendDatabase);
            return new Friend(id, friendDatabase[id]);
        },
    },
    Mutation: {
        createFriend: (root, {
            input
        }) => {
            const newFriend = new Friends({
                firstName: input.firstName,
                lastName: input.lastName,
                gender: input.gender,
                age: input.age,
                language: input.language,
                email: input.email,
                contacts: input.contacts
            });

            console.log(`creating friend ${newFriend.firstName}...`);

            newFriend.id = newFriend._id;

            return new Promise((resolve, object) => {
                newFriend.save((err) => {
                    if (err) rejects(err);
                    else resolve(newFriend);
                })
            });
        },
    },
};