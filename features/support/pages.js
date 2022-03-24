import { BasePage } from "../pageobjects/basePage";
import { CreateAccountPage } from "../pageobjects/createAccountPage";
import { MyAccountPage } from "../pageobjects/myAccountPage";

class Pages {
  constructor() {
    this.basePage = new BasePage();
    this.createAccountPage = new CreateAccountPage();
    this.MyAccountPage = new MyAccountPage();
  }
}

export const pages = new Pages();
