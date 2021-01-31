const formService = require("./service");
const logger = require("../common/logger")(__filename);

module.exports.getFormData = async (req, res, next) => {
  logger.info("get form data");
  let response = await formService.getFormData();
  res.status(response.status).send(response.data);
};
module.exports.postFormData = async (req, res, next) => {
  logger.info("postFormData");
  const data = req.body;
  let response = await formService.postFormData(data);
  res.status(response.status).send(response.data);
};
