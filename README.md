# Chrome Extension Boilerplate

This extension is designed to provide a starting point for developing Chrome Extensions.

This is a boilerplate using the Chrome Extension example consisting of Webpack, Typescript, React, and SCSS.

The current implementation follows the Chrome extensions [getting started](https://developer.chrome.com/extensions/getstarted) guide.

## Installation

1. Run `npm install`
2. Run `npm start`
3. Go to [chrome extensions url](chrome://extensions/)
4. Press *Load unpacked* button
5. Find and select the `chrome-extension-boilerplate/dist` folder
6. It should now be up and running :)

## Development

1. Webpack should automatically rebuild any files you change.
2. However, you will need to press the refresh button for the Chrome extension in the [chrome extensions page](chrome://extensions/)
3. You will _probably_ need to refresh the web page you're working on.

_NOTE:_ You may need to stop and start your build server (webpack) if you change your manifest file. It didn't appear to automatically rebuild - this may not be applicable anymore 🤷‍♂️

## Helpful Links
## Helpful Links

[Creating a Chrome Extension](https://medium.freecodecamp.org/how-to-create-a-chrome-extension-part-1-ad2a3a77541)
[Chrome Extension Boilerplate Example](https://github.com/duo-labs/chrome-extension-boilerplate)
[React Chrome Extension Boilerplate Example](https://github.com/jhen0409/react-chrome-extension-boilerplate)