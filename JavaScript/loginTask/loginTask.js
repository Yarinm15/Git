const { Builder, By, Key, until } = require('selenium-webdriver');

(async function loginTask() {
    // Initialize the WebDriver (use 'chrome' or 'firefox' based on your browser)
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Navigate to the login page
        await driver.get('https://the-internet.herokuapp.com/login');

        // Locate the username and password fields and input credentials
        await driver.findElement(By.id('username')).sendKeys('tomsmith');
        await driver.findElement(By.id('password')).sendKeys('SuperSecretPassword!');

        // Locate and click the login button
        await driver.findElement(By.xpath('//*[@id="login"]/button')).click();

        // Wait for the next page to load (adjust the condition as needed)
        await driver.wait(until.elementLocated(By.xpath('//h2[contains(text(), "Secure Area")]')), 2000);

        await driver.findElement(By.xpath('//div[@id="flash" and contains(@class, "success")]'));

        console.log('Login successful!');
    } catch (error) {
        console.error('Error during login:', error);
    } finally {
        // Quit the WebDriver
        await driver.quit();
    }
})();

//*[@id="login"]/button