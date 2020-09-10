const mongoose = require('mongoose');
const { Schema } = mongoose;
const {eventScheme, addressScheme, personScheme} = require('./mongo');

mongoose.set('useCreateIndex', true);

const eventSchema = new Schema(eventScheme);
const addressSchema = new Schema(addressScheme);
const personSchema = new Schema(personScheme);

module.exports = {
    addressSchema,
    personSchema,
    eventSchema
};
