# Portfolio Website
#### [AdrianLamLH.github.io](https://adrianlhlam.github.io)

## Description

Fully-custom built personal webpage with React, NodeJS, and gh-pages static hosting. Includes commonly referenced documents, highlights from past contributions, a brief introduction, and other professional links.

## Prerequisites
To use this repository, you need the following installed locally:

- npm
- react-scripts

Before launching the web app, install the necessary dependencies, clone the repository and navigate to the directory:

> git clone https://github.com/adrianlhlam/AdrianLamLH.github.io
> cd my-app
> npm install

## Navigating the pages

On the homepage, a prompted searchbar will appear allowing for webpage routing to one of these selectable pages:
- About me (Self-introduction)
- Resume [link](https://pdfhost.io/v/Fb9pfBrpn_Resume)
- Past Projects (collection of past works w/ descriptions + related links)
- GitHub [link](https://github.com/adrianlamlh)
- Linkedin [link](https://linkedin.com/in/adrianlhlam)

## Running the website locally

### To start local server (React):

`git checkout dev`

`cd my-app`

`npm start`

The app should be accessible at
[http://localhost:3000](http://localhost:3000) so you can view it in the browser.

### To publish website to gh-pages:

`git checkout dev`

`$ npm run deploy`

> That will cause the predeploy and deploy scripts defined in package.json to run.
>
> Under the hood, the predeploy script will build a distributable version of the React app and store it in a folder named build. Then, the deploy script will push the contents of that folder to a new commit on the main branch of the GitHub repository, creating that branch if it doesn't already exist.
>
> By default, the new commit on the main branch will have a commit message of "Updates". You can specify a custom commit message via the -m option, like this:

`$ npm run deploy -- -m "Deploy React app to GitHub Pages"`


This will deploy the current state changes to gh-pages.
Once the gh-actions deployment is complete, the webapp will be hosted on the live server.


## Troubleshooting
- If you encounter an error with react-scripts incompatibility, refer to this [thread](https://stackoverflow.com/questions/72596908/could-not-resolve-dependency-error-peer-react16-8-0-17-0-0-from-materia).
- gh-pages commonly faces problems with hosting .jpeg, use .png format files instead.
