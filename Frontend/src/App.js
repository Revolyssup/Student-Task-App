import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router,Route } from "react-router-dom"



import Navbar from '../src/components/navbar';
import tasksList from '../src/components/tasksList';
import createTask from '../src/components/createTask';
import editTask from '../src/components/editTask';
import createStudent from '../src/components/createStudent';


class App extends Component {
  render() {
    return (
        <Router>
          <div className="container">
              <Navbar />
              <br/>
              <Route path="/" exact component={tasksList}/>
              <Route path="/edit/:id" exact component={editTask}/>
              <Route path="/create" exact component={createTask}/>
              <Route path="/student" exact component={createStudent}/>
          </div>
        </Router>
    );
  }
}

export default App;
