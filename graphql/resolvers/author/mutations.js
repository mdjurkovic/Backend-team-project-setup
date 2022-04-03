import {Author, WorksAt} from "../../../db";

const authorMutations = {
    createAuthor: async (_, {author}, {loaders}) => {
        const newAuthor = new Author(author);

        return newAuthor.save();
    },
    updateAuthor: async (_, {id, author}, {loaders}) => {
        return Author.findByIdAndUpdate(id, {
                $set: {...author}
            },
            {new: true} //get the new version of record after update (default returns old value)
        );
    },
    addAuthorToPublisher: async (_, {id, publisher}) => {
        const author = new Author.findById(id);

        if (author) {
            const newWorksAt = new WorksAt({publisher, author: id});
            await newWorksAt.save();
        }

        return author;
    }
};

export default authorMutations;
