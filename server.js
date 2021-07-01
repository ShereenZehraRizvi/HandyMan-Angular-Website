const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors');

const mongoose = require('mongoose');
const  config = require('./DB');
memberRoute=require('./routes/member.route');
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useUnifiedTopology: true, useNewUrlParser: true})
.then(
    ()=>{ console.log('Database is connected')},
    err=>{console.log('can not connect to database '+err)}
);
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/members', memberRoute);

let port = process.env.PORT || 4000;

const serever = app.listen(port, function(){
    console.log('Listening on port '+port);
});

