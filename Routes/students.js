const router=require('express').Router();
let students=require('../Models/students.model');

router.route('/').get((req,res)=>{
    students.find()
        .then((arr)=>res.json(arr))
        .catch(err=>res.status(400).json(err))
});

router.route('/add').post((req,res)=>{
    const name= req.body.name;
    const newStudent= new students({name});
    newStudent.save()
        .then(()=>{console.log('Student Added Successfully')})
        .catch((err)=>{
            res.sendStatus(400)
            console.error(err)
        })
})

module.exports=router; 