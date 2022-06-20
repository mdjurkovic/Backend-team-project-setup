import { Author, WorksAt } from "../../../db/models";

const authorMutations = {
  createAuthor: async (_, { author }, { loaders }) => {
    const newAuthor = new Author(author);

    return await newAuthor.save();
  },
  updateAuthor: async (_, { id, author }, { loaders }) => {
    return await Author.findByIdAndUpdate(
      id,
      {
        $set: { ...author },
      },
      { new: true } //get the new version of record after update default returns old value
    );
  },
  addAuthorToPublisher: async (_, { id, publisher }) => {
    const author = await Author.findById(id);

    if (author) {
      const newWorksAt = new WorksAt({ publisher, author: id });
      await newWorksAt.save();
    }

    return author;
  },
};

export default authorMutations;
