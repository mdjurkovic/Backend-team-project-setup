import {authorQueries, authorMutations, authorFields} from './author';
import {bookQueries, bookMutations, bookFields} from './book';
import {
    publisherQueries,
    publisherMutations,
    publisherFields,
} from './publisher';
import {Author} from '../../db/models';

const resolvers = {
    Query: {
        ...authorQueries,
        ...bookQueries,
        ...publisherQueries,
    },
    Mutation: {
        ...authorMutations,
        ...bookMutations,
        ...publisherMutations,
    },
};

export default resolvers;
