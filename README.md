# Playwright Automation Framework

This is a simple and scalable Playwright automation framework built using JavaScript. It follows industry-standard practices like Page Object Model (POM), Fixtures, and reusable utilities.

---

## 📁 Project Structure

```
playwright-framework/
│
├── fixtures/          # Base test setup (custom fixtures)
├── pages/             # Page Object Model classes
├── tests/             # Test cases
├── utils/             # Config and test data
├── playwright.config.js
└── package.json
```

---

## ⚙️ Tech Stack

* Playwright
* JavaScript (Node.js)
* Page Object Model (POM)
* Fixtures (Test Setup)
* Test Runner (Playwright Test)

---

## 🚀 Setup Instructions

### 1. Clone the project

```bash
git clone <your-repo-url>
cd pw-maruti-framework
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install Playwright browsers

```bash
npx playwright install
```

---

## ▶️ How to Run Tests

### Run all tests

```bash
npx playwright test
```

### Run a specific test file

```bash
npx playwright test tests/navigation.spec.js
```

### Run tests in headed mode

```bash
npx playwright test --headed
```

---

## 🧪 Framework Highlights

* Uses Page Object Model (POM) for better maintainability
* Uses Fixtures for reusable setup (like page initialization)
* Centralized config file for base URL and environment data
* Clean separation of test, page, and utility layers
* Easy to scale for large automation projects

---

## 📌 Example Test

```javascript
const { test, expect } = require('../fixtures/baseTest');

test('Login Test', async ({ loginPage }) => {
  await loginPage.login('user@example.com', 'password');
  await expect(loginPage.getErrorMessage()).toBeVisible();
});
```

---

## 🧩 Fixtures Example (baseTest.js)

```javascript
const { test: base, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');

exports.test = base.extend({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  }
});

exports.expect = expect;
```

---

## 📄 Page Object Example

```javascript
class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async login(username, password) {
    await this.page.fill('#username', username);
```
