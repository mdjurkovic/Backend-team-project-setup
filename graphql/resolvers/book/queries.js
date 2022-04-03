import {Book} from '../../../db/models';

const bookQueries = {
    books: async (_, {params = {page: 1, pageSize: 20}}, {loaders}) => {
        return await Book.find();
    },
    book: async (_, {id}, {loaders}) => {
        return Book.findById(id);
    }
};

export default bookQueries;
