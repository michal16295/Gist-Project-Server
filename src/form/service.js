const logger = require("../common/logger")(__filename);
const formModel = require("./model");
const {
  responseSuccess,
  responseError,
  SERVER_ERROR,
} = require("../common/response");

module.exports.getFormData = async () => {
  logger.info(`load list of languages and gender `);
  let response;
  try {
    let formData = await formModel.find();
    if (!formData) {
      logger.warn("form data not found");
      return responseError(404, "form data not found");
    }
    response = formData;
  } catch (e) {
    logger.error(e.message);
    return responseError(500, SERVER_ERROR);
  }
  return responseSuccess(response);
};
module.exports.postFormData = async (data) => {
  logger.info(`insert language and gender lists `);
  let response;
  try {
    let res = await formModel.create(data);
    response = { res: res.ok };
  } catch (e) {
    logger.error(e.message);
    return responseError(500, SERVER_ERROR);
  }
  return responseSuccess(response);
};
