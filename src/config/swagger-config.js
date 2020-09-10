const PersonRoutes = require('../swagger/person');
const EventRoutes = require('../swagger/event');
const AddressRoutes = require('../swagger/address');
const BulkRoutes = require('../swagger/bulk');
const MongoSchemes = require('../data/mongo');
const { convertMongoToGeneralSchema } = require('../helpers/generic-helper-methods')

const swaggerDocument = {
    swaggerDefinition: {
        openapi: '3.0.1',
        info: {
            version: '1.0.0',
            title: `Contact Service API's Document`,
            description: 'This is the documentation for the contact service api server.',
            termsOfService: '',
            contact: {
                name: 'Dukes Wine Engineering',
                email: 'engineering@dukeswines.com',
                url: 'https://dukeswines.com'
            },
            license: {
                name: 'Apache 2.0',
                url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
            }
        },
        paths: {
            '/person': PersonRoutes,
            '/person/{id}': PersonRoutes.id,
            '/event': EventRoutes,
            '/event/{id}': EventRoutes.id,
            '/address': AddressRoutes,
            '/address/{id}':AddressRoutes.id,
            '/bulk': BulkRoutes
        },
        components: {
            schemas: {
                Person: convertMongoToGeneralSchema(MongoSchemes.personScheme),
                Address: convertMongoToGeneralSchema(MongoSchemes.addressScheme),
                Event: convertMongoToGeneralSchema(MongoSchemes.eventScheme)
            }
        }
        ,
        servers: [
            {
                url: "http://localhost:3001/api"
            }
        ]
    },
    apis: ['src/routes/**.js']
}

module.exports = swaggerDocument;
