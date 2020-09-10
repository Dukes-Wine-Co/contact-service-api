const addressId = {
    get: {
        tags: [
            'Address'
        ],
        summary: 'Returns an address by id',
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
                            '$ref': '#/components/schemas/Address'
                        }
                    }
                }
            },
            400: {
                description: 'Error making the given request',
            },
        },
    }
}

const AddressRoutes = {
    get: {
        tags: [
            'Address'
        ],
        summary: 'Returns every address in the database',
        parameters: [
        ],
        responses: {
            200: {
                description: 'Successful Request',
            },
            400: {
                description: 'Error making the given request',
            },
        },
    },
    post: {
        tags: [
            'Address'
        ],
        summary: 'Creates an address in the database',
        responses: {
            200: {
                description: 'Request Successful',
            },
            400: {
                description: 'Error submitting the given request',
            },
        },
    },
    id: addressId
};

module.exports = AddressRoutes;
