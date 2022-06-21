const { generateArt } = require("./art.service")

async function generateAssets(traitObj = undefined) {
    const {art, metadata} = await generateArt(traitObj);
    console.log('metadata: ', metadata);
    return {
        art,
        metadata
    }
}

async function uploadAssets (art, metadata) {
    
}

module.exports = {
    generateAssets,
    uploadAssets
}
