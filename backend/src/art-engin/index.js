const basePath = process.cwd() + '/src/art-engin';
const { startCreating, buildSetup } = require(`${basePath}/main.js`);

(() => {
  buildSetup();
  startCreating();
})();
