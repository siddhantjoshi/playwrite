const { test, expect } = require('@playwright/test')

test("First test case", async ({ page }) => {
    await page.goto("http://the-internet.herokuapp.com/");
    // await page.locator("//div[@id = 'content']/ul//a[contains(text(),'A/B')]").click();
    // await expect(page).toHaveTitle("The Internet");
    // await expect(page.locator("h3")).toContainText("A/B Test Variation 1")
    // await page.goBack();
    await page.locator("//div[@id = 'content']/ul//a[contains(text(),'Add')]").click();

    let btn = 5;
    for (let i = 0; i < btn; i++) {
        await page.locator("//button[contains(text(), 'Add')]").click();
    }
    const delBtn = page.locator("//button[@class = 'added-manually']");
    console.log(await delBtn.count());
    // await expect(delBtn.count()).toContainEqual(btn);

    // await page.locator("button[type='submit']").click();

    // await page.pause(5000);
    // (await page).locator("//input[@id='lastName']").fill("dsada");;
    // (await page).locator("//input[@id='userEmail']").fill("sdad@fdsf.com");;
    // (await page).locator("//input[@id='userMobile']").fill("6798798787");;
    // (await page).locator("//select[@formcontrolname='occupation']");
    // (await page).locator("//input[@id='userPassword']").fill("");;
    // (await page).locator("//input[@id='confirmPassword']").fill("");;
    // (await page).locator("//input[@type= 'checkbox']");
    // (await page).locator("//input[@id='login']");

});