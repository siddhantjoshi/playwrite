const { test, expect } = require('@playwright/test');

test.only("Test 1 - Invoke browser", async ({ page }) => {
    // const context = await browser.newContext() //new Browser instance
    // const page = await context.newPage(); 

    const userNameLoc = page.locator('#username');
    const userPasswordLoc = page.locator('#password');
    const signUpBtnloc = page.locator('#signInBtn');

    const userName = "rahulshettyacademy"
    const userPassword = "learning"

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await userNameLoc.fill("rahulshettyacademy");
    await userPasswordLoc.fill("ledsarning");
    await signUpBtnloc.click();
    await expect(page.locator("div .alert-danger")).toContainText("Incorrect");
    await userNameLoc.clear().then(await userNameLoc.fill(userName));
    await userPasswordLoc.clear().then(await userPasswordLoc.fill(userPassword));
    await expect(page.locator("div .alert-danger")).not.toBeVisible();


})
