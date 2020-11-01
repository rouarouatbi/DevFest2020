const express = require('express');
const bodyParser = require('body-parser');
var cors = require('./cors');
const mongoose = require('mongoose');
var authenticate = require('../authenticate');
const Blood = require('../models/blood');

const BloodRouter = express.Router();
BloodRouter.use(bodyParser.json());

var whitelist = [
    'http://0.0.0.0:3000', 'http://127.0.0.1:4200',
];
var corsOptions = {
    origin: function(origin, callback){
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true
};
app.use(cors(corsOptions));


BloodRouter.route('/blood')
.get(cors.cors,(req,res,next)=>{
    Blood.find({})
    .then((blood)=>{
        res.status.code=200;
        res.setHeader('Content-Type','application/json');
        res.json(blood);
    },(err)=>next(err))
    .catch((err)=>next(err));
})
.post(cors.cors,authenticate.verifyUser,(req,res,next)=>{
    Blood.create(req.body)
    .then((cont)=>{
        console.log('a new demand of blood has been recorded',cont);
        res.status = 200;
        res.setHeader('Content-Type','application/json');
        res.json({success:'success!'});
    },(err)=>next(err))
    .catch((err)=>next(err));
})


BloodRouter.route('/api/blood')
.options(cors.corsWithOptions, (req,res)=>{ res.sendStatus(200); })
.post(cors.cors,authenticate.verifyUser,(req,res,next)=>{
    Blood.create(req.body)
    .then((cont)=>{
        console.log('a new demand of blood has been recorded',cont);
        res.status = 200;
        res.setHeader('Content-Type','application/json');
        res.json({success:'success!'});
    },(err)=>next(err))
    .catch((err)=>next(err));
})
.put(cors.corsWithOptions,(req,res,next)=>{
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
});


BloodRouter.route('/api/blood/:blood_id')
.options(cors.corsWithOptions, (req,res)=>{ res.sendStatus(200); })
.get(cors.cors,(req,res,next)=>{
    Blood.findById(req.params.blood_id)
    .then((cont)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(cont);
    },(err)=>next(err))
    .catch((err)=>next(err))
})
.post(cors.corsWithOptions,(req,res,next)=>{
    res.statusCode = 403;
    res.end('POST operation not supported on contacts/id');
})
.put(cors.corsWithOptions,(req,res,next)=>{
    res.statusCode = 403;
    res.end('PUT operation not supported on /contacts/:id');
})
.delete(cors.corsWithOptions,authenticate.verifyUser,(req,res,next)=>{
    Contacts.findByIdAndRemove(req.params.id_mess)
    .then((resp)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(resp);
    },(err)=>next(err))
    .catch((err)=>next(err));
});
module.exports =BloodRouter;
