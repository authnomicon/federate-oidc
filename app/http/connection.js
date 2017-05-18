exports = module.exports = function(checkHandler) {
  var express = require('express');
  var router = new express.Router();
  
  router.get('/check', checkHandler);
  
  return router;
};

exports['@implements'] = 'http://schemas.authnomicon.org/js/oidc/http/ConnectionService';
exports['@require'] = [
  './handlers/connection/check',
];
