class CarsPage {
  constructor(page) {
    this.page = page;

    this.eVitara = this.page.locator('a[href*="e-vitara"]');
    // this.bookTestDrive = this.page.locator('a[href*="book-a-test-drive"]');
    this.bookTestDrive = this.page.getByRole('link', { name: 'Book Test Drive' });
  }

  async selectEVitara() {
    await this.eVitara.first().waitFor({ state: 'visible' });
    await this.eVitara.first().click();
  }
  async clickBookTestDrive() {
    await this.bookTestDrive.waitFor({ state: 'visible' });
    await this.bookTestDrive.click();
  }
}

module.exports = CarsPage;
