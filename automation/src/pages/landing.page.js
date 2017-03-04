import { Page } from './page';

export class LandingPage extends Page {
  constructor() {
    super('/', 'at-landing-page');
    this.loginButton = element(by.className('at-landing-login-btn'));
    this.registerButton = element(by.className('at-landing-register-btn'));
  }
}
