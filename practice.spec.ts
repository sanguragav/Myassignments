import {test} from '@playwright/test'
test("first test case", async ({page}) => {

     await page.goto("https://www.redbus.in ")
    let currenturl = await page.url()
  let pageName =   await page.title()
  console.log("page title: " + pageName)
  console.log("currenturl: " + currenturl)

  await page.goto("https://www.flipkart.com/")
     let currenturl2 = await page.url()
     let pageName2 =   await page.title()
     console.log("page title: " + pageName2)
     console.log("currenturl: " + currenturl2)



});

   