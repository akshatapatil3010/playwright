const {test, expect}=require('@playwright/test')

test("error message", async function({page})
{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

await page.getByRole('textbox',{name: 'username'}).fill("Admin")


await page.locator("//button[@type='submit']").click()

await expect(page.locator(".oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message")).toHaveText("Required")
})
