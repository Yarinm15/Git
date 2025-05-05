// pages/login.page.js
const { By } = require('selenium-webdriver');
const locators = require('../secureAreaPage/secureArea.locators'); // יבוא המיקומים של האלמנטים

class SecureAreaPage {
  constructor(driver) {
    this.driver = driver;  // אנחנו מקבלים את הדפדפן (Selenium WebDriver) פה
  }

  async clickLogoutButton() {
    const loginButtonElement = await this.driver.findElement(By.xpath(locators.logoutButton)); // מיקום של כפתור הכניסה
    await loginButtonElement.click();
  }
  
  async getLoginMessage() {
      const successLoginMessage = await this.driver.findElement(By.xpath(locators.successLoginMessage)); // מיקום של הודעת הצלחה
      return await successLoginMessage.getText(); // מחזיר את הטקסט של הודעת ההצלחה
  }
}

module.exports = SecureAreaPage;
