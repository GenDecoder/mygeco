import { browser, element, by } from 'protractor';

export class MygecoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mygeco-root h1')).getText();
  }
}
