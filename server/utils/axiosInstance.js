const axios = require('axios').default;
const { logger } = require('../utils/logger');
const qs = require('qs');

function axiosErrorFormatter(error) {
  const formattedError = {
    error: true,
    status: error.status,
    message: error.message
  };
  if (error.response) {
    formattedError.status = error.response.status;
    if (error.response.data) {
      formattedError.data = error.response.data;
    }
  }
  return formattedError;
}

module.exports = (ctx = null) => {
  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
  const header = {};
  const authorization = {};
  if (ctx && ctx.session && ctx.session.access_token) {
    header['Authorization'] = `Bearer ${ctx.session.access_token}`;
  }
  authorization['username'] = '1006';
  authorization['password'] = '581ba5eeadd657c8ccddc74c839bd3ad';
  
  const axiosConfigAuth = {
    baseURL: 'dev.ipay.ge',
    timeout: 1000 * 60 * 2,
    headers: header,
    auth: authorization
  };

  const axiosConfig = {
    baseURL: 'dev.ipay.ge',
    timeout: 1000 * 60 * 2,
    headers: header
  };

  let instance = axios.create(axiosConfig);

  if(ctx.headers['content-type'] === 'application/x-www-form-urlencoded'){
    instance = axios.create(axiosConfigAuth);
  }


  instance.interceptors.response.use((response) => {
    logger.info('AXIOS_RESPONSE', {
      request: response.config,
      response: response.data
    });
    return response;
  }, (error) => {
    logger.info('AXIOS_ERROR', axiosErrorFormatter(error));
    return Promise.reject(error);
  });
  
  return instance;
};
