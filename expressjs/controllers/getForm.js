const path = require('path');
const getForm = (req, res) => {
  // make sure to get the path correctly
 const indexPath = path.resolve(__dirname, '..', 'index.html');
  res.sendFile(indexPath);
};
module.exports = getForm;
