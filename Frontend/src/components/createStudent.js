import React, { Component } from 'react';
import axios from 'axios'
 class createStudent extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
        }
    }
    onChangeName=(e)=>{
        this.setState({
            name: e.target.value
        })
    }
    onSubmit=(e)=>{
        e.preventDefault();

        const Student={
            name: this.state.name,
        }
        console.log(Student)
        axios.post('/api/students/add',Student)
            .then(res=>console.log(res.data))

        this.setState({
            name:''
        })
    
    }

        render(){
            return(
                <div>
                    <h2>Add New Student </h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" value={this.state.name} onChange={this.onChangeName}/>
                        </div>


                        <div className="form-group">
                            <input type="submit" value="Add student" className="btn btn-primary"/>
                        </div> 
                    </form>
                </div>
                
            )
        }
 }
 export default createStudent