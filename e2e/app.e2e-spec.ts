import { Pro1Page } from './app.po';

describe('pro1 App', () => {
  let page: Pro1Page;

  beforeEach(() => {
    page = new Pro1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
