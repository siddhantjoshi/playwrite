const { test, expect } = require('@playwright/test');

test("Calander Test ", ({page})=>{
    const Date = "12";
    const Month = "12";
    const Year = "2034";

    page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    page.locator().click()

})