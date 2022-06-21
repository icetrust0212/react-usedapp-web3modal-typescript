const {generateArt} = require('../services/art.service');

exports.getGeneratedArt = async (req, res) => {
    const params = req.body;
    console.log('art-params: ', params);
    const art = await generateArt();
    console.log('art: ', art)
    res.status(200).send({
        success: true,
        art: art
    });
}