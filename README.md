# Banuba Web AR SDK and React integration example

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirements

- The [latest](#obtaining-banuba-sdk-web-ar) Banuba SDK Web AR release
- Banuba [client token](#obtaining-banuba-client-token)
- [Nodejs](https://nodejs.org/en/) installed
- Browser with support of [WebGL 2.0](https://caniuse.com/#feat=webgl2)

### Obtaining Banuba SDK Web AR

To get the latest Banuba SDK Web AR release please fill in the [form on banuba.com](https://www.banuba.com/face-filters-sdk) website, or contact us via [info@banuba.com](mailto:info@banuba.com).

### Obtaining Banuba Client token

Banuba Client token is required to get Banuba SDK Web AR working.

Generally it's delivered with Banuba SDK Web AR archive.

To receive a new **trial** client token please fill in the [form on banuba.com](https://www.banuba.com/face-filters-sdk) website, or contact us via [info@banuba.com](mailto:info@banuba.com).

## Environment setup and local run

Clone the repository

```bash
git clone https://github.com/Banuba/quickstart-web-react
```

Install React dependencies:
```bash
npm install
```

Put Banuba SDK Web AR [files](#obtaining-banuba-sdk-web-ar) into the cloned folder

```diff
quickstart-web-react/
    node_modules/
    public/
+     webar/
+       BanubaSDK.data
+       BanubaSDK.wasm
        Glasses.zip
      favicon.ico
      index,html
      logo192.png
      logo5112.png
      mainifest.json
      robots.txt
    src/
      App.css
      App.js
      App.test.js
+     BanubaSDK.js
      index.css
      index.js
      logo.svg
    .eslintignore
    .gitignore
    LICENSE
    pacakge-lock.json
    pacakge.json
    README.md
```

Insert Banuba [client token](#obtaining-banuba-client-token) at [src/App.js, line 7](./src/App.js#L7).

```js
const BANUBA_CLIENT_TOKEN = "PUT YOUR CLIENT TOKEN HERE"
```

### Local run

Run the app in the development mode via the command:
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

To learn Banuba SDK Web AR, check out the [Banuba Web AR SDK documentation](https://docs.banuba.com/face-ar-sdk/web/web_overview)
