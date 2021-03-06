const express =require('express');
const app=express();
const cors= require('cors');
const db= require('mongoose');
const path=require("path")
require('dotenv').config();

const port= process.env.PORT || 5000;

app.use(express.json());

app.use(express.static(path.join(__dirname, 'Frontend' ,'build')));
const uri=process.env.ATLAS_URI;
db.connect(uri,{useCreateIndex:true,useNewUrlParser:true,useUnifiedTopology: true });

const connection=db.connection;

connection.once('open',()=>{
    console.log('Connection to database established');
})

const studentsRouter=require('./Routes/students');
const tasksRouter=require('./Routes/tasks');

app.use('/api/students',studentsRouter);
app.use('/api/tasks',tasksRouter);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,'Frontend', 'build', 'index.html'));
  });

app.listen(port,()=>{
    console.log(`Server running on ${port}`)
    
})

