export class BasePage {
  getSignInButton() {
    return $(".login");
  }

  getCreateAnAccountButton() {
    return $("#SubmitCreate");
  }

  getEmailField() {
    return $("#email_create");
  }
}
