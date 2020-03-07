const app = require('./server.js');
require('./Router/employeeRouter.js')(app);

// starting the server 
app.listen(app.get('port'),()=>{
    console.log('server on port', app.get('port'));
});