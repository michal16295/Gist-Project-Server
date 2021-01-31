const logger = require("../common/logger")(__filename);
const userModel = require("./model");
const {
  responseSuccess,
  responseError,
  SERVER_ERROR,
} = require("../common/response");

module.exports.createUser = async (data) => {
  logger.info(`create new user`);
  let response;
  let res;
  try {
    res = await userModel.create(data);
    response = res;
  } catch (e) {
    logger.error(e.message);
    return responseError(500, SERVER_ERROR);
  }
  return responseSuccess(response);
};
