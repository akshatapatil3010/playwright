const{test, expect} =require('@playwright/test')
test.skip("first test", async function({page})
{
    expect(100).toBe(101)
})
test("second test", async function({page})
{
    expect(10).toBe(10)
})
test("third test", async function({page})
{
    expect(4.5).toBe(4.5)
})
test("fourth test", async function({page})
{
    expect("akshata patil").toContain("akshata")
    expect(true).toBeTruthy

})
test("fifth test", async function({page})
{
    expect(false).toBeFalsy

})
test("sixth test", async function({page})
{
    expect("akshata patil".includes("patil")).toBeTruthy()

})
test("sixth seventh", async function({page})
{
    expect("akshata patil".includes("akshata")).toBeTruthy()

})