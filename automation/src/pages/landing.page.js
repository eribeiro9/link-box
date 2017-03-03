import { Page } from './page';

export class LandingPage extends Page {
  constructor() {
    super('/', 'landing-header');
    this.loginButton = element(by.className('mat-accent'));
    this.registerButton = element(by.className('mat-primary'));
  }
}
