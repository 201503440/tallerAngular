const app = require('./server.js');
const morgan = require('morgan');

require('./Router/employeeRouter.js')(app);


//midleware 
app.use(morgan('dev'));

// starting the server 
app.listen(app.get('port'),()=>{
    console.log('server on port', app.get('port'));
});