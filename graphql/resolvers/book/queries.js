import {Author, Book} from '../../../db/models';

const bookQueries = {
    books: async (_, args) => {
        const books = await Book.find();

        return books.map(book => ({
            ...book,
            author: () => Author.findById(book.author)
        }));
    },
    book: async (_, {id}, {loaders}) => {
        return Book.findById(id);
    }
};

export default bookQueries;
