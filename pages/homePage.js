class HomePage {
  constructor(page) {
    this.page = page;
    this.carsMenu = this.page.locator('header div.link-title >> text=Cars');
  }

  async navigateToCars() {

    
    await this.page.waitForLoadState('domcontentloaded');

    await this.carsMenu.waitFor({ state: 'visible' });
    

    await this.carsMenu.hover();            
    await this.page.waitForTimeout(1000);
    
  }
}

module.exports = HomePage;