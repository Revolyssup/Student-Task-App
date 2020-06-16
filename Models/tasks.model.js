const db= require('mongoose');
const Schema= db.Schema;

const tasksSchema= new Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    duration:{type:Number,required:true},
    date:{type:Date,required:true}
},{
    timestamps:true
})

const tasks=db.model('tasks',tasksSchema)

module.exports=tasks;