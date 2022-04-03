const publisherQueries = {
    publishers: async (
        _,
        {params = {page: 1, pageSize: 20}},
        {loaders}
    ) => {

        return {};
    },
    publisher: async (_, {id}, {loaders}) => {
    }
};

export default publisherQueries;
