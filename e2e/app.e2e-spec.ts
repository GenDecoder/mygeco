import { MygecoPage } from './app.po';

describe('mygeco App', function() {
  let page: MygecoPage;

  beforeEach(() => {
    page = new MygecoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mygeco works!');
  });
});
