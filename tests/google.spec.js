const{test, expect} =require('@playwright/test')
const { log } = require('console')
test("varify the title", async function({page})
{
    await page.goto("https://google.com")
    const url=await page.url()
    console.log("title is "+url)

    const title=await page.title()
    console.log("title is "+title)
    await expect(page).toHaveTitle("Google")
})