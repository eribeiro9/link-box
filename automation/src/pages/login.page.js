import { Page } from './page';

export class LoginPage extends Page {
  constructor() {
    super('/login', 'at-login-page');
    this.usernameInput = element(by.className('at-login-username-input'));
    this.passwordInput = element(by.className('at-login-password-input'));
    this.backButton = element(by.className('at-login-back-btn'));
    this.loginButton = element(by.className('at-login-login-btn'));
    this.errors = element.all(by.className('at-login-error'));
  }

  loginAs(username, password) {
    this.usernameInput.sendKeys(username);
    this.passwordInput.sendKeys(password);
    return this.loginButton.click();
  }
}
