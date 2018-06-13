const Handlers = require("./controllers");

module.exports = {
    'router': Routify
}


function Routify(app){
    app.post("/tasks", function(req,res){
        Handlers.create(req,res);
    });
    
    // readall
    app.get("/tasks", function(req, res){
        Handlers.findAll(req,res);
    });
    
    // readone 
    app.get("/tasks/:id", function(req, res){
        Handlers.findOne(req,res);
    });
    
    // update 
    app.put("/tasks/:id", function(req, res){
        Handlers.updateOne(req,res);
    });
    
    // delete
    app.delete("/tasks/:id", function(req, res){
        Handlers.deleteOne(req,res);
    });
    return app;
}

// app.post("/tasks",(req,res)=>Handlers.create(req,res))