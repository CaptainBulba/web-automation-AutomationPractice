export class CreateAccountPage {
  getTitleCheckBox() {
    return $("#uniform-id_gender1");
  }

  getCustomerFirstName() {
    return $("#customer_firstname");
  }

  getCustomerLastName() {
    return $("#customer_lastname");
  }

  getPassword() {
    return $("#passwd");
  }

  getBirthDay() {
    return $("#days");
  }

  getBirthMonth() {
    return $("#months");
  }

  getBirthYear() {
    return $("#years");
  }

  async setBirthDay() {
    await this.getBirthDay().click();
    await this.getBirthDay().selectByIndex(1);
  }

  async setBirthMonth() {
    await this.getBirthMonth().click();
    await this.getBirthMonth().selectByIndex(1);
  }

  async setBirthYear() {
    await this.getBirthYear().click();
    await this.getBirthYear().selectByIndex(25);
  }

  getCountry() {
    return $("#id_country");
  }

  async setCountry() {
    await this.getCountry().click();
    await this.getCountry().selectByIndex(1);
  }

  getState() {
    return $("#id_state");
  }

  async setState() {
    await this.getState().click();
    await this.getState().selectByIndex(1);
  }

  getAddress() {
    return $("#address1");
  }

  getCity() {
    return $("#city");
  }

  getState() {
    return $("#id_state");
  }

  getZipCode() {
    return $("#postcode");
  }

  getCountry() {
    return $("#id_country");
  }

  getPhone() {
    return $("#phone_mobile");
  }

  getRegisterButton() {
    return $("#submitAccount");
  }
}
