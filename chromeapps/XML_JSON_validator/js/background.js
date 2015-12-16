/*
 * Chrome app background page
 */

// chrome app entry point
chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('app.html', {
    'outerBounds': {
      'width': 720,
      'height': 720,
      'minWidth': 780,
      'minHeight': 400
    }
  });
});
