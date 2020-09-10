const Address = require('./classes/Address');
const Person = require('./classes/Person');
const Event = require('./classes/Event');
const Models = require('../config/mongo-config');

const data = {
    Address: {
        className: Address,
        modelName: Models.AddressModel,
        stringName: 'Address'
    },
    Person: {
        className: Person,
        modelName: Models.PersonModel,
        stringName: 'Person'
    },
    Event: {
        className: Event,
        modelName: Models.EventModel,
        stringName: 'Event'
    }
};

module.exports = data;
