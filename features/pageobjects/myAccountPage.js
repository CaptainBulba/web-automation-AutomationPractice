export class MyAccountPage {
  getMyAccountHeader() {
    return $(".page-heading");
  }

  getMyAccountText() {
    return $(".info-account");
  }

  getLoggedInUser() {
    return $(".header_user_info")
  }
}
