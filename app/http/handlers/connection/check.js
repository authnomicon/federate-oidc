// TODO: Maybe rename "associate".
// Is there an XHR way that accomplishes same as iframes?
// no because CORS headers are easily faked?
// or yes because this iframe is needed when the password is posted back to the host domain
// XHR is needed to pass password to AS

exports = module.exports = function() {
  var path = require('path')
    , ejs = require('ejs');
  
  
  function respond(req, res, next) {
    var filename = path.join(__dirname, '../../../../www/connection/iframe.html.ejs');
    ejs.renderFile(filename, res.locals, function(err, html) {
      if (err) { return next(err); }
      return res.send(html);
    });
  }
  
  
  return [
    respond
  ];
};

exports['@require'] = [];
