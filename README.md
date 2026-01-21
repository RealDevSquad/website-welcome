# Welcome to Real Dev Squad's Website

This repository contains the welcome page for new members of Real Dev Squad. It provides an overview of the community, guidelines, and essential resources to help you get started.

[![Better Uptime Badge](https://betteruptime.com/status-badges/v1/monitor/5hux.svg)](https://betteruptime.com/?utm_source=status_badge)

# Welcome Site

https://welcome.realdevsquad.com/

# Want to contribute or Learn how to?

Read about our Contributing Process: [Here](CONTRIBUTING.md)

# Frequently Asked Questions

https://welcome.realdevsquad.com/faq

# Help with Discord

https://welcome.realdevsquad.com/discord

# Code of conduct at RDS

https://welcome.realdevsquad.com/code-of-conduct.html

# Running the project

- Kindly refer this before you start : https://github.com/Real-Dev-Squad/website-welcome/blob/develop/CONTRIBUTING.md

- Run `npm install` after opening the repository in your editor. This will install all the necessary packages for the project which are mentioned in the `package.json` file of the project.

# Scripts used in project

- `npm run check` checks the formatting of all the files in the project. This script runs in a pre-commit hook. It will warn about the improper formatting present in the file.
- `npm run fix` can be run for fixing the formatting before commiting your changes or to solve the formatting errors one may get while commiting the changes.

#### Note ⚠️: Please make sure to run `npm run fix` before committing your files. Otherwise if there are any formatting issues in your code, GitHub checks will fail on your PR (pull request). You will then have to run the `fix` script to fix those issues and push the formatted code again and now the checks should pass.

### Note: If you get CORS error for API calls during development, please consider reading [this](https://github.com/Real-Dev-Squad/website-code-docs/tree/main/docs/dev/https-dev-url-cors) documentation.
