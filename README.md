# Playwright_Tests for Saucedemo

**To install NVM (Node Version Manager)**

**A. For macOS and Linux**
1. Download and install NVM: Run the following command in your terminal:

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash

2. Activate NVM: After the installation, activate NVM by adding the following lines to your shell configuration file (e.g., ~/.bashrc, ~/.zshrc, or ~/.bash_profile):

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

Then, reload your shell:

source ~/.bashrc

3. Verify Installation: Check if NVM is installed:
nvm --version
If you see a version number, NVM is successfully installed.


**B. For Windows**

1. Download nvm-windows: NVM isn't natively supported on Windows, but you can use nvm-windows.

Visit the nvm-windows GitHub page(https://github.com/coreybutler/nvm-windows/releases).
Download the latest nvm-setup.zip file.

2. Install nvm-windows:

Extract the .zip file and run the nvm-setup.exe installer.
Follow the installation wizard.

3. Verify Installation: Open Command Prompt and check if NVM is installed:
nvm version
If you see a version number, it’s installed.

**Install Node.js Using NVM**

Once NVM is installed, you can install and manage Node.js versions:

nvm install 20

nvm use 20

node -v

**To Run the test use the following command in terminal(First change directory to test project)**

npm install
npx playwright install

**For Running Test**

npm run test:chrome

