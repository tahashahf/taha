Here's a step-by-step guide to implementing CI/CD in GitHub using GitHub Actions:

## Step 1: Create a GitHub Repository
1. Go to GitHub and create a new repository.
2. Initialize the repository with a README file.

## Step 2: Create a Simple Node.js Project
1. Create a new file called `index.js` with the following code:

function add(a, b) {
  return a + b;
}

console.log(add(2, 3));


2. Create a new file called `package.json` with the following code:

{
  "name": "github-ci-cd",
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js",
    "test": "jest"
  },
  "dependencies": {
    "jest": "^29.0.3"
  }
}


3. Run `npm install` to install the dependencies.

## Step 3: Write Automated Tests
1. Create a new file called `index.test.js` with the following code:

const add = require('./index');

test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});

2. Run `npm test` to run the tests.

## Step 4: Create a GitHub Actions Workflow
1. Create a new file called `.github/workflows/ci-cd.yml` with the following code:

name: Node.js CI/CD

on:
  push:
    branches: [main]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test
      - name: Build and deploy
        run: echo "Build and deploy step"

2. This workflow will run on every push to the `main` branch.

## Step 5: Store the Workflow File and Trigger the Workflow
1. Commit and push the changes to the GitHub repository.
2. Go to the "Actions" tab in the GitHub repository to see the workflow run.

## Complete Code
Here's the complete code for the project:

index.js
index.test.js
package.json
.github/workflows/ci-cd.yml
