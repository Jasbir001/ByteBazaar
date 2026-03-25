const express =  require('express');
const bodyParser = require('body-parser');
const myroute = require('./route')
// ----------------------------------//

const app = express()
app.set('view engine','ejs');
app.listen(5406,()=>{
    console.log('click here http://localhost:5406');
})
const url = bodyParser.urlencoded({extended:false})
app.use(url);
app.use('/',myroute)

app.use("/Public",express.static(__dirname+'/Public'))

// ----------------------------------//




