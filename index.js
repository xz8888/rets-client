
var Promise = require('bluebird');
var coffee = require('coffee-script');
coffee.register();

var Client = require('./lib/client');

/*  Available settings:
 *      loginUrl: RETS login URL (i.e http://<MLS_DOMAIN>/rets/login.ashx)
 *      username: username credential
 *      password: password credential
 *      version: rets version
 *
 *      //RETS-UA-Authorization
 *      userAgent
 *      userAgentPassword
 *      sessionId
 */
module.exports = {
  Client: Client,
  getAutoLogoutClient: function(settings, handler) {
    var client = new Client(settings);
    return client.login()
    .then(handler)
    .finally(function() {
      return client.logout();
    });
  }
};
