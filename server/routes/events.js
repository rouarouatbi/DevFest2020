const express = require('express');
const bodyParser = require('body-parser');
var cors = require('./cors');
const mongoose = require('mongoose');
var authenticate = require('../authenticate');
const event = require('../models/event');

const EventRouter = express.Router();
NeedRouter.use(bodyParser.json());




EventRouter.route('/event')
.get(cors.cors,(req,res,next)=>{
    event.find({})
    .then((blood)=>{
        res.status.code=200;
        res.setHeader('Content-Type','application/json');
        res.json(blood);
    },(err)=>next(err))
    .catch((err)=>next(err));
})
.post(cors.cors,authenticate.verifyUser,(req,res,next)=>{
    event.create(req.body)
    .then((cont)=>{
        console.log('a new event has been recorded',cont);
        res.status = 200;
        res.setHeader('Content-Type','application/json');
        res.json({success:'success!'});
    },(err)=>next(err))
    .catch((err)=>next(err));
})


EventRouter.route('api/event')
.options(cors.corsWithOptions, (req,res)=>{ res.sendStatus(200); })
.post(cors.cors,authenticate.verifyUser,(req,res,next)=>{
    event.create(req.body)
    .then((cont)=>{
        console.log('a new event has been recorded',cont);
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