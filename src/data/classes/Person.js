const SENDINBLUE_MAP = {
    EMAIL: 'email',
    LASTNAME: 'lastname',
    FIRSTNAME: 'firstname',
    SMS: 'phoneNumber'
}

class Person {
    constructor(body) {
        if (this.hasSendInBlueBody(body)){
            this.sendInBlueConstructor(body)
        } else {
            this.defaultConstructor(body)
        }

        this.eventsAttended = body.eventsAttended || [];
        this.address = body.address;
    }

    hasSendInBlueBody(body){
        return Object.keys(body).includes('EMAIL')
    }

    sendInBlueConstructor(body){
        this.firstName = body.FIRSTNAME;
        this.lastName = body.LASTNAME;
        this.email = body.EMAIL;
        this.phoneNumber = body.SMS;
    }

    defaultConstructor(body){
        this.firstName = body.firstName;
        this.lastName = body.lastName;
        this.phoneNumber = body.phoneNumber;
        this.email = body.email;
    }

    getBody() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            eventsAttended: this.eventsAttended,
            phoneNumber: this.phoneNumber,
            email: this.email,
            address: this.address
        };
    }

    toJSON() {
        return JSON.stringify(this.getBody());
    }
}

module.exports = Person;
