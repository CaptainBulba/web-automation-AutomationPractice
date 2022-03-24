import { pages } from "../support/pages";

export class NavigationTest {
  async openPage() {
    await browser.url("/");
    await pages.basePage.getSignInButton().waitForDisplayed({ timeout: 5000 });
  }

  async pressSignInButton() {
    await pages.basePage.getSignInButton().click();
    await browser.switchWindow("Login - My Store");
  }

  async pressCreateAnAccount() {
    await pages.basePage.getCreateAnAccountButton().click();
  }

  async pressRegister() {
    await pages.createAccountPage.getRegisterButton().click();
  }
}
