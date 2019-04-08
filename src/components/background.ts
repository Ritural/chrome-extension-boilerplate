// Import manifest file needed for chrome extensions
import 'app/manifest.json';

// Import images
import 'public/images/get_started16.png';
import 'public/images/get_started32.png';
import 'public/images/get_started48.png';
import 'public/images/get_started128.png';

chrome.runtime.onInstalled.addListener(function () {
  // Default the colour to green
  chrome.storage.sync.set({ color: 'green' }, function () {
    console.log("The color is green.");
  });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: { hostEquals: 'developer.chrome.com' },
      })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
