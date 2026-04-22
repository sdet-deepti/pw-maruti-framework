class HomePage {
  constructor(page) {
    this.page = page;
    this.carsMenu = this.page.locator('header div.link-title >> text=Cars');
  }

  async navigateToCars() {

    console.log("➡️ Step: Navigating to Cars menu");
    await this.page.waitForLoadState('domcontentloaded');

    await this.carsMenu.waitFor({ state: 'visible' });
    console.log("✅ Cars menu is visible");

    await this.carsMenu.hover();            
    await this.page.waitForTimeout(1000);
    console.log("✅ Hovered on Cars menu successfully");
  }
}

module.exports = HomePage;