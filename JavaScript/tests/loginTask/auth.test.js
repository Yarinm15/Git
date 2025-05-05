require('dotenv').config({ path: './tests/loginTask/.env' });  

const { Builder } = require('selenium-webdriver');
const LoginPage = require('./loginPage/login.page');
const SecureAreaPage = require('./secureAreaPage/secureArea.page'); 
const loginConstants = require('./loginPage/login.constants'); // Import locators for login page
const secureAreaConstants = require('./secureAreaPage/secureArea.constants');

jest.setTimeout(20000); // Set timeout to 10 seconds

describe('Login Test', () => {
  let driver; 
  let loginPage;
  let secureAreaPage;

  beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build(); // Initialize the WebDriver
    loginPage = new LoginPage(driver); // Create an instance of the LoginPage class
    secureAreaPage = new SecureAreaPage(driver); // Create an instance of the SecureAreaPage class
  });

  afterAll(async () => {
    await driver.quit();
  });

    it('should navigate successfully', async () => {
      const navigateSuccessfully = await loginPage.navigateToLoginPage(process.env.BASE_URL); // Navigate to the login page
      expect(navigateSuccessfully).toContain(loginConstants.loginPageHeadline); // Check if the login page is loaded
    });

    it('should log in successfully', async () => {
      console.log(process.env.USERNAME); // Log the username to the console
      await loginPage.enterUsername(process.env.LOGIN_USERNAME); // Use environment variable for username
      await loginPage.enterPassword(process.env.LOGIN_PASSWORD); // Use environment variable for password
      await loginPage.clickLoginButton(); // Click login button
    });

    it('should display success login message', async () => {
      const successLoginMessage = await secureAreaPage.getLoginMessage(); // Get the success message
      expect(successLoginMessage).toContain(secureAreaConstants.successLoginMessage); // Check if the success message is displayed
    });

    it('should log out successfully', async () => {
      await secureAreaPage.clickLogoutButton(); // Click logout button
      const successLogoutMessage = await loginPage.getLogoutMessage(); // Get the success message
      expect(successLogoutMessage).toContain(loginConstants.successLogoutMessage); // Check if the success message is displayed
    });
});
