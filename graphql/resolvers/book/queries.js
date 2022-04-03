const bookQueries = {
    books: async (_, {params = {page: 1, pageSize: 20}}, {loaders}) => {
        return {};
    },
    book: async (_, {id}, {loaders}) => {
    }
};

export default bookQueries;
