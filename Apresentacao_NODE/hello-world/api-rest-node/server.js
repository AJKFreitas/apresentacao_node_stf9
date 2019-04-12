
var express = require('express'),
app = express(),
port = process.env.PORT || 3002,
mongoose = require('mongoose'),
Message = require('./models/msgModel'),
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/msgdb", { useNewUrlParser: true })


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./routes/msgRoutes');
routes(app);
app.listen(port);
console.log('Message RESTful API server started on: ' + port);



// var express = require('express'),
// app = express(),
// port = process.env.PORT || 3002;
// app.listen(port);
// app.get('/', 
//         function(req, res) { 
//             res.json({hello : 'world'});
//         }
//     )
// console.log('Message RESTful API server started on: ' + port);

