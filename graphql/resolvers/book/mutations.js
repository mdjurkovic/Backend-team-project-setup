import {Book} from '../../../db/models';

const bookMutations = {
    createBook: async (_, {book}, {loaders}) => {
        const newBook = new Book(book);

        return newBook.save();
    },
    updateBook: async (_, {id, book}, {loaders}) => {
        return Book.findByIdAndUpdate(id, {
            $set: {...book}
        }, {new: true});
    },
};

export default bookMutations;
