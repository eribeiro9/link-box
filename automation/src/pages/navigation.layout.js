import { Page } from './page';

export class NavigationLayout extends Page {
  constructor(route, classSelector) {
    super(route, classSelector);
    this.navigation = {
      conversationsTab: element(by.className('at-navigation-conversations-tab')),
      usersTab: element(by.className('at-navigation-users-tab')),
      bookmarksTab: element(by.className('at-navigation-bookmarks-tab')),
      profileTab: element(by.className('at-navigation-profile-tab')),
      logoutTab: element(by.className('at-navigation-logout-tab'))
    };
    this.logoutDialog = {
      dialog: element(by.className('at-logout-dialog')),
      cancelButton: element(by.className('at-logout-cancel-btn')),
      logoutButton: element(by.className('at-logout-logout-btn'))
    };
  }
}
