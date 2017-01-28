# package-gh-pages
Github Pages for development and production with Webpack, Express, and EJS.
Initially built for React Packages

## Prerequisites
1. Install PM2 (**required**): `npm install -g pm2`
2. Install Webpack Bundle Size Analyzer (**optional**): `npm install -g webpack-bundle-size-analyzer`

## How to use (development)
1. Copy `.env.example` to `.env`
2. Run `npm install` to install dependencies
3. Make changes to `app/app.js` or `bin/www/index.js` if needed
4. Make changes to `resources/views/index.ejs` if needed
5. Make changes to `webpack.config.js` if needed
5. Run `npm start` to start the Express server
6. Run `npm run wds` to start webpack-dev-server
7. Open `localhost:3004` (default) or adjust to the changes you made before

## How to use (production)
1. Make changes to `resources/views/index-prod.ejs` if needed
2. Make changes to `webpack.config.js` if needed
3. Run `npm run build`
4. Go to `public/` and see that your HTML file is there, along with the assets in the `assets/` folder!
