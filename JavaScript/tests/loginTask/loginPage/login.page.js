// pages/login.page.js
const { By } = require('selenium-webdriver');
const locators = require('./login.locators'); // יבוא המיקומים של האלמנטים

class LoginPage {
  constructor(driver) {
    this.driver = driver;  // אנחנו מקבלים את הדפדפן (Selenium WebDriver) פה
  }

  async navigateToLoginPage(url) {
    await this.driver.get(url); 
    const loginPageHeadline = await this.driver.findElement(By.xpath(locators.loginPageHeadline)); // Check if the login page is loaded  
    return loginPageHeadline.getText(); 
  }

  async enterUsername(username) {
    const usernameElement = await this.driver.findElement(By.id(locators.usernameField)); // מיקום של שדה שם משתמש
    await usernameElement.sendKeys(username);
  }

  async enterPassword(password) {
    const passwordElement = await this.driver.findElement(By.id(locators.passwordField)); // מיקום של שדה סיסמה
    await passwordElement.sendKeys(password);
  }

  async clickLoginButton() {
    const loginButtonElement = await this.driver.findElement(By.xpath(locators.loginButton)); // מיקום של כפתור הכניסה
    await loginButtonElement.click();
  }

  async getLogoutMessage() {
    const successLogoutMessage = await this.driver.findElement(By.xpath(locators.successLogoutMessage)); // מיקום של הודעת הצלחה
    return await successLogoutMessage.getText(); // מחזיר את הטקסט של הודעת ההצלחה
  }
}

module.exports = LoginPage;
