
var Hapi = require('hapi');
var routes = require('./routes')(Hapi);
var server = new Hapi.Server();
server.connection({ port:3000 });


server.route([{
  method: 'GET',
  path: '/vote/sms',
  handler: routes.voteSMS
}]);


server.start(function(){
  console.log('Server running at:', server.info.uri);
});
