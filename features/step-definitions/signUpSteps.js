import { Given, When, Then } from "@wdio/cucumber-framework";
import { pages } from "../support/pages";
import { tests } from "../support/tests";

When("User fills in mandatory user details", async function () {
  await pages.createAccountPage.getTitleCheckBox().waitForDisplayed({ timeout: 10000 });
  await tests.signUpTest.fillOutCreateAccountForm();
});

When("User presses the Register button", async function () {
  await tests.navigationTest.pressRegister();
});
