const basePath = process.cwd() + '/src/art-engin';
const { startCreating, buildSetup } = require(`${basePath}/main.js`);
let init = false;

async function generateArt(traitObj = undefined) {
    if (!init) {
        buildSetup();
        init = true;
    }
    return await startCreating(traitObj);
}



module.exports = {
    generateArt,
}
