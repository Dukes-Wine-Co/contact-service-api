const eventId = {
    get: {
        tags: [
            'Event'
        ],
        summary: 'Returns an event by id',
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
                            '$ref': '#/components/schemas/Event'
                        }
                    }
                }
            },
            400: {
                description: 'Bad request'
            }
        }
    }
}

const EventRoutes = {
    get: {
        tags: [
            'Event'
        ],
        summary: 'Returns every event in the database',
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
            'Event'
        ],
        summary: 'Creates an event in the database',
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
    id: eventId
};

module.exports = EventRoutes;
