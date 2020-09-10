const BulkRoutes = {
    post: {
        tags: [
            'Bulk'
        ],
        summary: 'This method inserts a bulk set of a given data type into the dataset.',
        parameters: [],
        responses: {
            200: {
                description: 'Successful Submission',
            },
            400: {
                description: 'Bad request',
            },
        },
    },
};

module.exports = BulkRoutes;
