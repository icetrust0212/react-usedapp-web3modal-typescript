
const whitelistMembers = require('../whitelist/whitelist').whitelist.array;
const signMessage = require('../services/sign');
const {generateAssets, uploadAssets} = require('../services/metadata.service');

exports.getWhitelist = async (req, res) => {
  const address = req.params.address;
  let signature = null;
  let success = false;
  if (whitelistMembers.findIndex((item) => address === item) !== -1 ) {
    signature = await signMessage(address);
    success = true;
  } else {
    signature = [];
    success = false;
  }

  res.status(200).send({
    signature,
    success
  });
};

exports.getWhitelistCount = (req, res) => {
  res.status(200).send({
    count: whitelistMembers.length,
    success: true,
  });
}

exports.mintAvatar = (req, res) => {
  const {trait} = req.body;
  console.log('trait: ', trait);
  generateAssets(trait).then(data => {
    console.log('data: ', data);
    uploadAssets(data.art, data.metadata);
    res.status(200).send({
      success: true
    });
  });
}