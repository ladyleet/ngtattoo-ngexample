import { Ngtattoo1Page } from './app.po';

describe('ngtattoo-1 App', function() {
  let page: Ngtattoo1Page;

  beforeEach(() => {
    page = new Ngtattoo1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
