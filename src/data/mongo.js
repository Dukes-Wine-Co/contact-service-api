const { Schema } = require('mongoose');
const { configureMongoCollectionName } = require('../helpers/mongo-methods');

// const address = {
//     id: Number,
//     state: String,
//     city: String,
//     zipCode: String,
//     addressLine1: String,
//     addressLine2: String
// };
//
// const person = {
//     firstName: String,
//     lastName: String,
//     eventsAttended: [
//         Number // eventIds
//     ],
//     phoneNumber: String,
//     email: String,
//     id: Number,
//     address: addressId
// };
//
// const event = {
//     id: Number,
//     address: addressId,
//     eventAttendees: eventAttendeeId
// };
//
// const eventAttendee = {
//     id: Number,
//     eventId: Number,
//     personId: Number
// };

const eventScheme = {
    address: {
        type: Schema.Types.ObjectId,
        ref: configureMongoCollectionName('Address')
    },
    eventAttendees: [{
        type: Schema.Types.ObjectId,
        ref: configureMongoCollectionName('Person')
    }],
    virtual: {
        type: Boolean,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    eventDate: {
        type: Date,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    timeZone: {
        type: String,
        required: true
    }
}

const addressScheme = {
    state: {
        type: String,
        required: true,
        unique: false
    },
    city: {
        type: String,
        required: true,
        unique: false
    },
    zipCode: {
        type: String,
        required: true,
        unique: false
    },
    addressLine1: {
        type: String,
        required: true,
        unique: false
    },
    addressLine2: {
        type: String,
        required: false,
        unique: false
    }
};


const personScheme = {
    firstName: {
        type: String,
        required: true,
        unique: false
    },
    lastName: {
        type: String,
        required: true,
        unique: false
    },
    eventsAttended: [{
        type: Schema.Types.ObjectId,
        ref: configureMongoCollectionName('Event')
    }],
    phoneNumber: {
        type: String,
        required: false,
        unique: false
    },
    email: {
        type: String,
        required: true,
        unique: false
    },
    address: {
        type: Schema.Types.ObjectId,
        ref: configureMongoCollectionName('Address')
    }
}

module.exports = {
    eventScheme,
    addressScheme,
    personScheme
}
