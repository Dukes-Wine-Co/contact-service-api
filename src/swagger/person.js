const personId = {
    get: {
        tags: [
            'Person'
        ],
        summary: 'Returns a person by id',
        parameters: [
            {
                in: 'path',
                name: 'id',
                required: true,
                type: 'String'
            }
        ],
        responses: {
            200: {
                description: 'Successful Request',
                content: {
                    'application/json': {
                        schema: {
                            '$ref': '#/components/schemas/Person'
                        }
                    }
                }
            },
            400: {
                description: 'bad request'
            }
        }
    }
}

const PersonRoutes = {
    get: {
        tags: [
            'Person'
        ],
        summary: 'Returns every person in the database',
        parameters: [],
        responses: {
            200: {
                description: 'Successful Request'
            },
            400: {
                description: 'Bad request'
            }
        }
    },
    post: {
        tags: [
            'Person'
        ],
        summary: 'Creates a person in the database',
        parameters: [],
        responses: {
            200: {
                description: 'Successful Submission'
            },
            400: {
                description: 'Bad request'
            }
        }
    },
    id: personId
};

module.exports = PersonRoutes;
