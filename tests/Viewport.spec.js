const {test, expect}=require('@playwright/test')

test.use({viewport: {width:630,height:383}})

test("valid login", async function({page})

{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

await page.getByPlaceholder("username").fill("Admin")

await page.getByPlaceholder("password").fill("admin123")

await page.locator("//button[@type='submit']").click()

await expect(page).toHaveURL(/dashboard/);

await page.getByAltText("profile picture").first().click()

await page.getByText("Logout").click()

await expect(page).toHaveURL(/login/);

})

