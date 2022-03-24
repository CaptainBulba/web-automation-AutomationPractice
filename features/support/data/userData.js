const { faker } = require("@faker-js/faker");

export default class UserData {
  constructor() {
    this.User = new User(
      faker.internet.email(),
      faker.internet.password(),
      faker.name.firstName(),
      faker.name.lastName(),
      faker.phone.phoneNumberFormat(),
      faker.address.streetAddress(),
      faker.address.city(),
    );
  }
}

class User {
  constructor(
    email,
    password,
    firstname,
    lastname,
    phone,
    address,
    city,
    postCode
  ) {
    this.email = email;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
    this.phone = phone;
    this.address = address;
    this.city = city;
  }
}
