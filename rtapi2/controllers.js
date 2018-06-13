const { Tasks, Lists, Users } = require("./mongoosestuff");

module.exports = {
    create: create,
    findAll: findAll,
    findOne: findOne,
    deleteOne: deleteOne,
    updateOne: updateOne
}

function create(req,res){
    Tasks.create(req.body)
         .then(data=>res.json(data))
         .catch(errs=>res.json(errs));
}

function findAll(req,res){
    Tasks.find({})
         .then((data)=>res.json(data))
         .catch(errs=>res.json(errs));
}

// readone 
function findOne(req, res){
    Tasks.findById(req.params.id)
         .then(data=>res.json(data))
         .catch(errs=>res.json(errs))
}

// update 
function updateOne(req, res){
    Tasks.findByIdAndUpdate(req.params.id, {new: true}, req.body)
         .then(data=>res.json(data))
         .catch(errs=>res.json(errs));
}

// delete
function deleteOne(req, res){
    Tasks.findByIdAndRemove(req.params.id)
         .then(data=>res.json(data))
         .catch(errs=>res.json(errs))
}