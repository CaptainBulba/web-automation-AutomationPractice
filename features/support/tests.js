import { NavigationTest } from "../testobjects/navigationTest";
import { SignUpTest } from "../testobjects/signUpTest";

class Tests {
  constructor() {
    this.navigationTest = new NavigationTest();
    this.signUpTest = new SignUpTest();
  }
}

export const tests = new Tests();
