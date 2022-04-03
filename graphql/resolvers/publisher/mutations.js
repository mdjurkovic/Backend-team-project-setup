import {Publisher} from '../../../db/models';

const publisherMutations = {
    createPublisher: async (_, {publisher}, {loaders}) => {
        const newPublisher = new Publisher(publisher);

        return newPublisher.save();
    },
    updatePublisher: async (_, {id, publisher}, {loaders}) => {
        return publisher.findByIdAndUpdate(id, {
            $set: {...publisher}
        }, {new: true});
    },
};

export default publisherMutations;
