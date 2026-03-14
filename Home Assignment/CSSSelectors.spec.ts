import {test} from '@playwright/test'



test("first test case", async ({page}) => {


    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator('[id="username"]').fill("Demosalesmanager");
    await page.locator('[id="password"]').fill("crmsfa");
    await page.locator('[class="decorativeSubmit"]').click();
     
    await page.locator('[src="/opentaps_images/integratingweb/crm.png"]').click();
     await page.waitForTimeout(5000);
    await page.locator('[href="/crmsfa/control/leadsMain"]').click();
        await page.waitForTimeout(5000);
    await page.locator('[href="/crmsfa/control/createLeadForm"]').click();
     await page.waitForTimeout(5000);   
    await page.locator('[id="createLeadForm_companyName"]').fill("Test Company");
    await page.locator('[id="createLeadForm_firstName"]').fill("Test");
    await page.locator('[id="createLeadForm_lastName"]').fill("Leaf");
    await page.locator('[id="createLeadForm_generalProfTitle"]').fill("sangaveeform");
    await page.locator('[id="createLeadForm_personalTitle"]').fill("sangavee");
    await page.waitForTimeout(5000);   
    
    await page.locator('[id="createLeadForm_annualRevenue"]').fill("100");
      
    await page.locator('[id="createLeadForm_departmentName"]').fill("Testing");
    await page.locator('[id="createLeadForm_primaryPhoneNumber"]').fill("1234567890");
 

    await page.locator('[value="Create Lead"]').click();
});