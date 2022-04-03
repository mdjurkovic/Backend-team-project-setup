import {Author} from '../../../db/models';

const authorQueries = {
    authors: async (_, args) => {
        return await Author.find();
    },
    author: async (_, {id}) => {
        return Author.findById(id);
    }
};

export default authorQueries;
