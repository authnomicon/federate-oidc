// TODO: Maybe rename "associate".
// Is there an XHR way that accomplishes same as iframes?
// no because CORS headers are easily faked?
// or yes because this iframe is needed when the password is posted back to the host domain
// XHR is needed to pass password to AS

exports = module.exports = function(initialize, parse, Tokens) {
  var path = require('path');
  
  
  function validateToken(req, res, next) {
    console.log('Validating session token...');
    console.log(req.query)
    
    //if (!req.query.id_token_hint) { return next(new SkipSessionInitiationError()); }
    
    
    
    Tokens.decipher(req.query.token, { dialect: 'urn:ietf:params:oauth:token-type:id_token' }, function(err, claims, issuer) {
      if (err) { return next(err); }
      
      console.log('GOT CLAIMS');
      console.log(claims);
      
      //req.authInfo = req.authInfo || {};
      req.locals.challenge = claims.confirmation[0].challenge;
      next();
    });
  }
  
  function respond(req, res) {
    console.log('SETTING UP SESSION...');
    console.log(req.body)
    
    res.send('TODO')
  }
  
  
  return [
    initialize(),
    parse('application/x-www-form-urlencoded'),
    //validateToken,
    respond
  ];
};

exports['@require'] = [
  'http://i.bixbyjs.org/http/middleware/initialize',
  'http://i.bixbyjs.org/http/middleware/parse',
  'http://i.bixbyjs.org/tokens'
];
