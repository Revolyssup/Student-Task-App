import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
 class editTask extends Component{

        constructor(props){
            super(props);
    
            this.state={
                name:"",
                description:"",
                duration:0,
                date:new Date(),
                students:[]
            }
        }
        componentDidMount(){
            axios.get('/api/tasks' + this.props.match.params.id)
                .then((res)=>{
                    this.setState({
                        name:res.data.name,
                        description:res.data.description,
                        duration:res.data.duration,
                        date:new Date(res.data.data)
                    })
                }).catch(err=>console.error(err))



            axios.get('/api/students')
                .then((res)=>{
                    if (res.data.length>0){
                        
                        this.setState({
                            students: res.data.map(student=>student.name),
                        
                        })
                    }
                })
               
            
        }
        onChangeName=(e)=>{
            this.setState({
                name: e.target.value
            })
        }

        onChangeDescription=(e)=>{
            this.setState({
                description: e.target.value
            })
        }

        onChangeDuration=(e)=>{
            this.setState({
                duration: e.target.value
            })
        }

        onChangeDate=(e)=>{
            this.setState({
                date: e.target.value
            })
        }

        onSubmit=(e)=>{
            e.preventDefault();

            const Task={
                name: this.state.name,
                description:this.state.description,
                duration:this.state.duration,
                date:this.state.date
            }
            axios.post('/api/tasks/update/'+ this.props.match.params.id, Task)

            window.location='/';
        }


        render(){
            return(
                
                <div>
                   

                    <h2>Create New Task</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Student's Name</label>
                            <select ref="userInput"
                                required
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeName}
                                >
                                    {
                                        this.state.students.map((student)=>{
                                        return <option key={student} value={student}>
                                        {student}
                                    </option>
                                        })
                                    }
                                </select>
                        </div>

                        <div className="form-group">
                            <label>Description of task</label>
                            <input type="text" className="form-control" value={this.state.description} onChange={this.onChangeDescription}/>
                        </div>  

                        <div className="form-group">
                            <label>Duration (in hours)</label>
                            <input type="text" className="form-control" value={this.state.duration} onChange={this.onChangeDuration}/>
                        </div>  

                        <div className="form-group">
                            <label>Date</label>
                            <DatePicker selected={this.state.date} onChange={this.onChangeDate}/>
                        </div>  




                        <div className="form-group">
                            <input type="submit" value="Finish" className="btn btn-primary"/>
                        </div>  
                    </form>
                </div>
            )
        }
 }
 export default editTask