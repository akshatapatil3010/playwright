const {test, expect}=require('@playwright/test')

test('Dropdwon test ', async ({ page }) => {

await page.goto("https://freelance-learn-automation.vercel.app/signup")

await page.locator("#state").selectOption({label: "Goa"})

await page.waitForTimeout(1000)

await page.locator("#state").selectOption({value: "Punjab"})

await page.waitForTimeout(2000)

await page.locator("#state").selectOption({index:22})

await page.waitForTimeout(2000)

const check=await page.locator('#state option').allTextContents()

console.log(check)

expect(check).toContain('Maharashtra')

const count=await page.locator('#state option').count()

console.log(count)

const options =page.locator('#state option')
for( let i=0;i<count;i++)
{
    const text= await options.nth(i).textContent()
    if(i===count-1)
    {
    console.log(text)
    }
    if(text.trim()==='Maharashtra')
    {
        console.log("found");
        
    }
}
});