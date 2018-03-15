import { LoginOwnPage } from './app.po';

describe('login-own App', () => {
  let page: LoginOwnPage;

  beforeEach(() => {
    page = new LoginOwnPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
