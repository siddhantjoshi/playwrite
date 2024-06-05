const { test, expect } = require('@playwright/test');

test.only("E2E Ecom Testing", async ({ page }) => {
    const myAccDrpDwn = "[title='My Account']"
    const firstName = "input[id = 'input-firstname']";
    const lastName = "input[id = 'input-lastname']";
    const userEmail = "input[id = 'input-email']";
    const userMob = "input[id = 'input-telephone']";
    const userPassword = "input[id = 'input-password']";
    const privacyChkBox = "div [class='pull-right']>input";
    const contBtn = "input[value='Continue']";
    
    
        await page.goto("https://tutorialsninja.com/demo/index.php?");


});