const authorQueries = {
    authors: async (_, {params = {page: 1, pageSize: 20}}, {loaders}) => {
        return {};
    },
    author: async (_, {id}, {loaders}) => {
    }
};

export default authorQueries;
