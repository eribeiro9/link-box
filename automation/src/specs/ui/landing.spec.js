import {
  LandingPage,
  LoginPage,
  RegisterPage
} from '../../pages';

describe('Landing Page', () => {
  let landingPage, loginPage, registerPage;

  beforeEach(() => {
    landingPage = new LandingPage();
    loginPage = new LoginPage();
    registerPage = new RegisterPage();
    landingPage.goTo();
  });

  it('Displays two buttons', () => {
    expect(landingPage.loginButton.isDisplayed()).toBe(true);
    expect(landingPage.registerButton.isDisplayed()).toBe(true);
  });

  it('Redirects to Login Page', () => {
    landingPage.loginButton.click();
    loginPage.waitFor();
    expect(loginPage.isAt()).toBe(true);
  });

  it('Redirects to Register Page', () => {
    landingPage.registerButton.click();
    registerPage.waitFor();
    expect(registerPage.isAt()).toBe(true);
  });
});
