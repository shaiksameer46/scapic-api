const Product = require('../models/product.model');//mongoose model imported

//all routing functions handled below.
async function test(req,res) {
res.send('Greetings from the Test controller!');}

async function list(req, res) {
try{data = await Product.find();}
catch(err){res.send(err);return next(err);}
res.json(data);}

async function product_details(req, res) {
    try{data = await Product.find({category:req.params.string});}
    catch(err){res.send(err);return next(err);}
    res.json(data);}

async function product_create(req,res){
try{
   product = new Product(
        {
            category:req.body.category,
            name:req.body.name,
            mtl:req.body.mtl,
            obj:req.body.obj,
            thumb:req.body.thumb
        }
    );}
    catch(err)       
    {
     res.send(err);
     return next(err);
    }
    data = await product.save();
    res.send(data);
}

async function product_details_byid(req, res ,next) {
    try{product = await Product.findById(req.params.id);}
    catch(err){res.status(404).json(err);}
    res.send("product details"+ product);}
    

async function product_update(req,res){
try{product = await Product.findByIdAndUpdate(req.params.id, {$set: req.body});}
catch(err){res.send(err);return next(err);}
res.send("product updated" + product);}

async function product_delete(req,res){
try{product = await Product.findByIdAndRemove(req.params.id);}
catch(err){res.send(err);return next(err);}
res.send("product deleted" + product);}

exports.test = test;
exports.list = list;
exports.product_delete = product_delete;
exports.product_details = product_details;
exports.product_details_byid = product_details_byid;
exports.product_update = product_update;
exports.product_create = product_create;