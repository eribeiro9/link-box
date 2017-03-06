import {
  ConversationsPage,
  LandingPage,
  LoginPage
} from '../../pages';

describe('Login Page', () => {
  let conversationsPage, landingPage, loginPage;

  beforeEach(() => {
    conversationsPage = new ConversationsPage();
    landingPage = new LandingPage();
    loginPage = new LoginPage();
    // loginPage.goTo(); // DEFECT WORKAROUND
    landingPage.goTo();
    landingPage.loginButton.click();
    loginPage.waitFor();
    // DEFECT WORKAROUND
  });

  it('Displays two inputs and two buttons', () => {
    expect(loginPage.usernameInput.isDisplayed()).toBe(true);
    expect(loginPage.passwordInput.isDisplayed()).toBe(true);
    expect(loginPage.backButton.isDisplayed()).toBe(true);
    expect(loginPage.loginButton.isDisplayed()).toBe(true);
  });

  it('Goes back to Landing page', () => {
    loginPage.backButton.click();
    landingPage.waitFor();
    expect(landingPage.isAt()).toBe(true);
  });

  describe('Form', () => {
    xit('Requires username');

    xit('Requires password');

    it('Displays error for invalid credentials', () => {
      loginPage.loginAs('test1', 'test1');
      loginPage.waitForErrors();
      expect(loginPage.errors.count()).toBe(1);
      expect(loginPage.errors.get(0).getText()).toContain('Invalid credentials');
    });

    it('Redirects on successful login', () => {
      loginPage.loginAs('test1', '123');
      conversationsPage.waitFor();
      expect(conversationsPage.isAt()).toBe(true);
    });
  });
});
