import { SECURITYPage } from './app.po';

describe('security App', function() {
  let page: SECURITYPage;

  beforeEach(() => {
    page = new SECURITYPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
