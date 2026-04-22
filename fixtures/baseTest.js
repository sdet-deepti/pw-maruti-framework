const { test: base, expect } = require('@playwright/test');
const HomePage = require('../pages/homePage');
const CarsPage = require('../pages/carsPage');
const config = require('../utils/config');

exports.test = base.extend({

  homePage: async ({ page }, use) => {
    console.log("🌐 Launching Application");

    await page.goto(config.baseURL);

    await use(new HomePage(page));
  },

  carsPage: async ({ page }, use) => {
    await use(new CarsPage(page));
  }

});

exports.expect = expect;