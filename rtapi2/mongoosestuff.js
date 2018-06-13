const goose = require("mongoose");

goose.connect("mongodb://localhost/rtapi2", function(err){
    console.log("HEYYEYEYEYEYE");
});

const TaskSchema = new goose.Schema({
    title: {type: String, required: true},
    description: { type: String, required: true},
    completed: {type: Boolean, default: false}
},{timestamps: true});


module.exports = goose.model("tasks", TaskSchema)