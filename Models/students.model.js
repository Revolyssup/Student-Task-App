const db=require('mongoose');
const Schema= db.Schema;
const studentSchema= new Schema({
    name:{
        type: String,
        required:true,
        unique:true,
        trim:true,
        minlength:2
    }

},{ 
    timestamps:true
});

const students=db.model('students',studentSchema);

module.exports=students;