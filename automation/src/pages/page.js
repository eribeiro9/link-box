import { CONFIG } from '../config/main';

let EC = protractor.ExpectedConditions;

export class Page {
  constructor(route, classSelector) {
    this.route = route;
    this.element = element(by.className(classSelector));
  }

  goTo() {
    return browser.get(CONFIG.BASE_URL + this.route);
  }

  isAt() {
    return this.element.isPresent();
  }

  waitFor() {
    return browser.wait(EC.visibilityOf(this.element), 5000);
  }
}
