import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Task=(props)=>(
    <tr>
        <td>{props.task.name }</td>
        <td>{props.task.description }</td>
        <td>{props.task.duration }</td>
        <td>{props.task.date.substring(0,10)}</td>
        <td> 
            <Link to={"/edit/" + props.task._id}>Edit</Link> | <a href="#" onClick={()=>{props.deleteTask(props.task._id)}}>Delete</a>
        </td>
    </tr>
)



 class tasksList extends Component{
        constructor(props){
            super(props);

            this.state={
                tasks:[]
            }
        }
            /* eslint-disable */ 
        componentDidMount(){
           
                axios.get('/api/tasks').
                    then((res)=>{
                            this.setState({
                              tasks: res.data
                            })
                    })
                   
        }

        deleteTask=(id)=>{
                axios.delete('/api/tasks/'+ id).
                    then(()=>console.log(id+" deleted"))
                this.setState({
                    tasks: this.state.tasks.filter((el)=> el._id!=id)
                })    
        }
        tasksList=()=>{
                return this.state.tasks.map(currTask=>{
                    return <Task task={currTask} deleteTask={this.deleteTask} id={currTask._id}/>
                })
        }


    render() {
    return (
      <div>
        <h3>Logged Tasks</h3>
        <table className="table">
          <thead className="thead-primary thead-dark">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.tasksList() }
          </tbody>
        </table>
      </div>
    )
  }
            
 }
 export default tasksList