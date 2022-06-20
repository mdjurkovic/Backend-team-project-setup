import { Publisher } from "../../../db/models";

const publisherMutations = {
  createPublisher: async (_, { publisher }, { loaders }) => {
    const newPublisher = new Publisher(publisher);

    return await newPublisher.save();
  },
  updatePublisher: async (_, { id, publisher }, { loaders }) => {
    return await publisher.findByIdAndUpdate(
      id,
      {
        $set: { ...publisher },
      },
      { new: true }
    );
  },
};

export default publisherMutations;
