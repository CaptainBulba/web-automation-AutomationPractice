import { Given, When, Then } from "@wdio/cucumber-framework";
import { tests } from "../support/tests";

Given("User has opened the landing page", async function () {
  await tests.navigationTest.openPage();
});

Given("User presses the Sign In button", async function () {
  await tests.navigationTest.pressSignInButton();
});

When("User enters a new email address", async function () {
  await tests.signUpTest.fillOutCreateEmailForm();
});

When("User presses Create account button", async function () {
  await tests.navigationTest.pressCreateAnAccount();
});

Then("User is in My account page", async function () {
  await tests.signUpTest.inMyAccount();
});

Then("User is logged in", async function () {
  await tests.signUpTest.isLoggedIn();
});