# Repository Setup and Workflow

This document provides instructions for setting up the repository, running tests, and contributing changes. Follow the steps carefully to ensure proper workflow and compliance with branch protection rules.

---

### Cloning the Repository

To start working with the repository, execute the following commands:

    git clone https://github.com/ITQA-B20/itqa.git
    cd itqa
    npm install


### Run the Tests
To execute the tests using Cypress, run:

    npx cypress open 


## Contribution Guidelines

### Branch Protection Rules

Direct pushes to the `main` branch are **`restricted`**. All changes must be made through branches and merged into the `main` branch via pull requests.

### Steps for Contributing Changes

1.  **Create a New Branch**  
    Use the following command to create a branch for a feature or bug fix with a descriptive name:
    `git checkout -b <newBranchName>` 
    
2.  **Push the New Branch**  
    Push the branch to the remote repository using:
    `git push origin <newBranchName>` 
    
3.  **Create a Pull Request**  
    Open a pull request on GitHub to merge the branch into the `main` branch. Ensure the following:
    -   All required tests pass.

----------
