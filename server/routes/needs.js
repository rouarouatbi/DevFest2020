const express = require('express');
const bodyParser = require('body-parser');
var cors = require('./cors');
const mongoose = require('mongoose');
var authenticate = require('../authenticate');
const Need = require('../models/need');

const NeedRouter = express.Router();
NeedRouter.use(bodyParser.json());




NeedRouter.route('/blood')
.get(cors.cors,(req,res,next)=>{
    Need.find({})
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
        console.log('a new demand of help has been recorded',cont);
        res.status = 200;
        res.setHeader('Content-Type','application/json');
        res.json({success:'success!'});
    },(err)=>next(err))
    .catch((err)=>next(err));
})


NeedRouter.route('api/need')
.options(cors.corsWithOptions, (req,res)=>{ res.sendStatus(200); })
.post(cors.cors,authenticate.verifyUser,(req,res,next)=>{
    Need.create(req.body)
    .then((cont)=>{
        console.log('a new demand of help has been recorded',cont);
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


NeedRouter.route('/api/need/:need_id')
.options(cors.corsWithOptions, (req,res)=>{ res.sendStatus(200); })
.get(cors.cors,(req,res,next)=>{
    Need.findById(req.params.blood_id)
    .then((cont)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(cont);
    },(err)=>next(err))
    .catch((err)=>next(err))
})
.post(cors.corsWithOptions,(req,res,next)=>{
    res.statusCode = 403;
    res.end('POST operation not supported on Needs/id');
})
.put(cors.corsWithOptions,(req,res,next)=>{
    res.statusCode = 403;
    res.end('PUT operation not supported on /Neeeds/:id');
})
.delete(cors.corsWithOptions,authenticate.verifyUser,(req,res,next)=>{
    Need.findByIdAndRemove(req.params.id_mess)
    .then((resp)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(resp);
    },(err)=>next(err))
    .catch((err)=>next(err));
});
module.exports =NeedRouter;
