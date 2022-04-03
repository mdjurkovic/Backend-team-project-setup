var graphql = require('graphql');

// Maps id to User object
var fakeDatabase = {
    'a': {
        id: 'a',
        name: 'alice',
    },
    'b': {
        id: 'b',
        name: 'bob',
    },
};

// Define the User type
var userType = new graphql.GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: graphql.GraphQLString },
        name: { type: graphql.GraphQLString },
    }
});

// Define the Query type
var queryType = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
        user: {
            type: userType,
            // `args` describes the arguments that the `user` query accepts
            args: {
                id: { type: graphql.GraphQLString }
            },
            resolve: (_, {id}) => {
                return fakeDatabase[id];
            }
        }
    }
});

exports.UserSchema = new graphql.GraphQLSchema({query: queryType});
