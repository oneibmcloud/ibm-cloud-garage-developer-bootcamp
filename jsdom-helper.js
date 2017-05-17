const jsdom = require('jsdom').jsdom;
console.log(jsdom);

global.document = new jsdom('');
global.window = document.defaultView;
window.console = global.console;

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};
