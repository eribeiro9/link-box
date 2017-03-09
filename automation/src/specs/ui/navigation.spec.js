import {
  LoginPage,
  ConversationsPage,
  UsersPage,
  BookmarksPage,
  ProfilePage
} from '../../pages';

describe('Landing Page', () => {
  let loginPage, conversationsPage, usersPage, bookmarksPage, profilePage;

  beforeAll(() => {
    loginPage = new LoginPage();
    conversationsPage = new ConversationsPage();
    loginPage.goTo();
    loginPage.loginAs('test1', '123');
    conversationsPage.waitFor();
  });

  beforeEach(() => {
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
    xit('Opens and closes');

    xit('Logs out and redirects');
  });
});
