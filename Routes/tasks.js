const router=require('express').Router();
let tasks=require('../Models/tasks.model');

router.route('/').get((req,res)=>{
    tasks.find()
        .then(tasks=>res.json(tasks))
        .catch(err=>res.status(400).json(err));
})


router.route('/add').post((req,res)=>{
    const name= req.body.name;
    const description=req.body.description;
    const duration=Number(req.body.duration);
    const date=Date(req.body.date);
    const newTask= new tasks({name,description,duration,date});
    newTask.save()
        .then(()=>console.log('Task Added'))
        .catch(err=>res.status(400).json(err));
})

router.route('/:id').get((req,res)=>{
    tasks.findById(req.params.id)
        .then(task=>res.json(task))
        .catch(err=>res.status(400).json(err))
})

router.route('/:id').delete((req,res)=>{
    tasks.findByIdAndDelete(req.params.id)
        .then(()=>console.log('Successfully Deleted'))
        .catch(err=>res.status(400).json(err))
})

router.route('/update/:id').post((req,res)=>{
    tasks.findById(req.params.id).
        then((task)=>{
            task.name= req.body.name;
            task.description=req.body.description;
            task.duration=Number(req.body.duration);
            task.date=Date(req.body.date);
            task.save()
                .then(()=>console.log('Successfully updated'))
                .catch(err=>res.status(400).json);
        })
    
})



module.exports=router;