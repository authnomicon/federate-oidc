// TODO: Maybe rename "associate".
// Is there an XHR way that accomplishes same as iframes?
// no because CORS headers are easily faked?
// or yes because this iframe is needed when the password is posted back to the host domain
// XHR is needed to pass password to AS

exports = module.exports = function() {
  var path = require('path');
  
  
  function respond(req, res) {
    var f = path.join(__dirname, '../../../www/check.html');
    res.sendFile(f);
  }
  
  
  return [
    respond
  ];
};

exports['@require'] = [];
