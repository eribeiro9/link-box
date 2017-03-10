import {
  LandingPage,
  LoginPage,
  ConversationsPage,
  UsersPage,
  BookmarksPage,
  ProfilePage
} from '../../pages';

describe('Landing Page', () => {
  let landingPage, loginPage, conversationsPage, usersPage, bookmarksPage, profilePage;

  beforeAll(() => {
    loginPage = new LoginPage();
    conversationsPage = new ConversationsPage();
    loginPage.goTo();
    loginPage.loginAs('test1', '123');
    conversationsPage.waitFor();
  });

  beforeEach(() => {
    landingPage = new LandingPage();
    conversationsPage = new ConversationsPage();
    usersPage = new UsersPage();
    bookmarksPage = new BookmarksPage();
    profilePage = new ProfilePage();
    conversationsPage.goTo();
  });

  it('Navigates to all pages', () => {
    conversationsPage.navigation.usersTab.click();
    usersPage.waitFor();
    expect(usersPage.isAt()).toBe(true);

    usersPage.navigation.bookmarksTab.click();
    bookmarksPage.waitFor();
    expect(bookmarksPage.isAt()).toBe(true);

    bookmarksPage.navigation.profileTab.click();
    profilePage.waitFor();
    expect(profilePage.isAt()).toBe(true);

    profilePage.navigation.conversationsTab.click();
    conversationsPage.waitFor();
    expect(conversationsPage.isAt()).toBe(true);
  });

  describe('Logout', () => {
    it('Opens and closes', () => {
      expect(conversationsPage.logoutDialog.dialog.isPresent()).toBe(false);
      conversationsPage.navigation.logoutTab.click();
      expect(conversationsPage.logoutDialog.dialog.isPresent()).toBe(true);
      conversationsPage.logoutDialog.cancelButton.click();
      expect(conversationsPage.logoutDialog.dialog.isPresent()).toBe(false);
    });

    it('Logs out and redirects', () => {
      conversationsPage.navigation.logoutTab.click();
      conversationsPage.logoutDialog.logoutButton.click();
      landingPage.waitFor();
      expect(landingPage.isAt()).toBe(true);
    });
  });
});
