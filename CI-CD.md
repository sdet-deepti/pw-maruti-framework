# Playwright Maruti Automation Framework (Jenkins CI/CD)

This repository contains the end-to-end automation suite for the Nexa Experience (e-Vitara) booking flow. It is optimized to run in a containerized Jenkins environment using WSL2 and Docker.

## 🛠 CI/CD Architecture

The framework is integrated with Jenkins using a "Hybrid Agent" strategy:
- **Master Node:** Handles Git Checkout and SSH credentials.
- **Docker Agent:** A transient container (`mcr.microsoft.com/playwright`) handles the `npm` installation and test execution to ensure a clean environment for every run.

## 🚀 Key Fixes & Optimizations

### 1. Permission Handover
To prevent workspace cleanup failures, the pipeline performs a recursive `chown` at the end of the test suite. This returns ownership of files created by the Docker `root` user back to the Jenkins user.

### 2. Virtual Display (Xvfb)
Since the framework is configured for "headed" browser execution for local debugging, the Jenkins pipeline utilizes `xvfb-run`. This allows the browser to launch into a virtual frame buffer, satisfying GUI requirements without a physical monitor.

### 3. Version Synchronization
The pipeline is locked to Playwright version `1.59.1` to match the development environment. 
> **Note:** If `package.json` is updated, the `Jenkinsfile` Docker image tag must be updated accordingly.

### 4. Reporting
HTML Reports are published directly to the Jenkins Build dashboard via the **HTML Publisher Plugin**. 
* **Note:** If CSS is missing in the report, the Jenkins Administrator must run the following in the Script Console:
  `System.setProperty("hudson.model.DirectoryBrowserSupport.CSP", "")`

## 📋 Prerequisites
- **Jenkins Plugins:** Docker Pipeline, SSH Agent, HTML Publisher, Workspace Cleanup.
- **Environment:** Jenkins running on WSL2/Ubuntu with Docker access.

## 🏃 Running Tests
The pipeline executes the following command:
`xvfb-run npx playwright test --project=chromium`
