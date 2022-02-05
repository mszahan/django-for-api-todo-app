import './App.css';
import React, {Component} from 'react';
import axios from 'axios';

const demo_api = [
  {"id": 1,
   "title":"first todo",
   "body":"Learn django basic"   
  },

  
  {"id": 2,
   "title":"second todo",
   "body":"Learn django rest api"   
  },

  {"id": 3,
   "title":"third todo",
   "body":"Learn react basic"   
  },


]


class App extends Component{
  state = {
    todos:[]
  };

  componentDidMount(){
    this.getTodos();
  }

  getTodos(){
    axios
      .get('http://127.0.0.1:8000/api/')
      .then(res => {
        this.setState({todos: res.data});
      })
      .catch(err => {
        console.log(err);
      });
  }

  render(){
    return(
    <div>
      {
        this.state.todos.map(item => (
          <div key={item.id}> 
            <h1>{item.title}</h1>
            <p>{item.body}</p>  
          </div>
        ))
      }
    </div>
    )
  }
}


export default App;
