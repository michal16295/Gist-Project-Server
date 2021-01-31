const userServices = require("./service");
const logger = require("../common/logger")(__filename);

module.exports.createUser = async (req, res, next) => {
  logger.info("create user");
  const data = req.body;
  let response = await userServices.createUser(data);
  res.status(response.status).send(response.data);
};
