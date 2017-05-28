import { ShopAdminPage } from './app.po';

describe('shop-admin App', () => {
  let page: ShopAdminPage;

  beforeEach(() => {
    page = new ShopAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
