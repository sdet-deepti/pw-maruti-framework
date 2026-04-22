const { test, expect } = require('../fixtures/baseTest');

test('Navigate to e Vitara and Book Test Drive', async ({ homePage, carsPage }) => {

  console.log("🚀 Test Started");

  // Step 1: Open Cars Menu
  await homePage.navigateToCars();

  console.log("✔ Validating Cars menu opened");
  await expect(homePage.page.locator('div.link-title span', { hasText: 'Cars' }))
    .toBeVisible({ timeout: 5000 });

  // Step 2: Click e Vitara
  await carsPage.selectEVitara();

  console.log("✔ Validating e Vitara page navigation");
  await expect(carsPage.page)
    .toHaveURL(/e-vitara/i);

  // Step 3: Click Book Test Drive
  await carsPage.clickBookTestDrive();

  console.log("✔ Validating Book Test Drive page navigation");
  await expect(carsPage.page)
    .toHaveURL(/book-a-test-drive/i);

  console.log("🎯 Test Completed Successfully");

});