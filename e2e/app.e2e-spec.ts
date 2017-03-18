import { AngularScottBelangerPage } from './app.po';

describe('angular-scott-belanger App', () => {
  let page: AngularScottBelangerPage;

  beforeEach(() => {
    page = new AngularScottBelangerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
