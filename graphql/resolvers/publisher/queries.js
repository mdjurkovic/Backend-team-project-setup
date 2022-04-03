import {Publisher} from '../../../db/models';

const publisherQueries = {
    publishers: async (
        _,
        {params = {page: 1, pageSize: 20}},
        {loaders}
    ) => {
        return await Publisher.find();
    },
    publisher: async (_, {id}, {loaders}) => {
        return Publisher.findById(id);
    }
};

export default publisherQueries;
