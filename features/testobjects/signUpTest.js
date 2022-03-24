import { pages } from "../support/pages";
import { data } from "../support/data";

export class SignUpTest {
  async fillOutCreateEmailForm() {
    await browser.maximizeWindow();
    await pages.basePage.getEmailField().setValue(await data.userData.User.email);
  }

  async fillOutCreateAccountForm() {
    await pages.createAccountPage.getTitleCheckBox().click();
    await pages.createAccountPage.getCustomerFirstName().setValue(await data.userData.User.firstname);
    await pages.createAccountPage.getCustomerLastName().setValue(await data.userData.User.lastname);
    await pages.createAccountPage.getPassword().setValue(await data.userData.User.password);
    await pages.createAccountPage.setBirthDay();
    await pages.createAccountPage.setBirthMonth();
    await pages.createAccountPage.setBirthYear();
    await pages.createAccountPage.getAddress().setValue(await data.userData.User.address);
    await pages.createAccountPage.getCity().setValue(await data.userData.User.city);
    await pages.createAccountPage.setCountry();
    await pages.createAccountPage.setState();
    await pages.createAccountPage.getZipCode().setValue('12345');
    await pages.createAccountPage.getPhone().setValue(await data.userData.User.phone);
  }

  async inMyAccount() {
    await pages.MyAccountPage.getMyAccountHeader().waitForDisplayed({timeout: 5000,});
    await pages.MyAccountPage.getMyAccountText().waitForDisplayed();
    await expect(pages.MyAccountPage.getMyAccountText()).toHaveText(
      "Welcome to your account. Here you can manage all of your personal information and orders."
    );
  }

  async isLoggedIn() {
    await pages.MyAccountPage.getLoggedInUser().waitForDisplayed();
    await expect(pages.MyAccountPage.getLoggedInUser()).toHaveText(
      await data.userData.User.firstname + " " + await data.userData.User.lastname
    );
  }
}
