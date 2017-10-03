# MM Web App
This source code base on Next.JS which is a minimalistic framework for server-rendered React applications.

**Visit https://learnnextjs.com to get started with Next.js.**

## Development
 * Create new `.env` file with example from `.env.example`
 * Install packages: `npm install`
 * Run on localhost: `npm run dev` and open http://localhost:3000 on your browser

## Deployment

* Clone the Azure source code
 `git clone https://dunghd@maomaoweb-dev.scm.azurewebsites.net:443/maomaoweb.git`

* Copy the `.git` folder from the Azure source to mm_web_app folder

* Add production repo

 `git remote add azure https://dunghd@maomaoweb.scm.azurewebsites.net:443/maomaoweb.git`

* Add dev repo

`git remote add azure-dev https://dunghd@maomaoweb-dev.scm.azurewebsites.net:443/maomaoweb.git`

We have 2 commands for deploy to Azure server: `yarn deploy:prod` and `yarn deploy:dev`.
