import { Page } from './page';

export class RegisterPage extends Page {
  constructor() {
    super('/register', 'at-register-page');
    this.usernameInput = element(by.className('at-register-username-input'));
    this.emailInput = element(by.className('at-register-email-input'));
    this.passwordInput = element(by.className('at-register-password-input'));
    this.verifyPasswordInput = element(by.className('at-register-verifyPassword-input'));
    this.backButton = element(by.className('at-register-back-btn'));
    this.registerButton = element(by.className('at-register-login-btn'));
    this.errors = element.all(by.className('at-register-error'));
  }

  registerAs(username, password, verifyPassword, email) {
    this.usernameInput.sendKeys(username);
    if (email) this.emailInput.sendKeys(email);
    this.passwordInput.sendKeys(password);
    this.verifyPasswordInput.sendKeys(verifyPassword);
    return this.registerButton.click();
  }
}
