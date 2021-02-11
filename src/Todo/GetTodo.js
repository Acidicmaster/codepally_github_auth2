import React from 'react';  
import { Table,Button } from 'react-bootstrap';  
import axios from 'axios';  
  
const apiUrl = 'http://localhost:9000/api/todo/';  
  
class TodoList extends React.Component{  
    constructor(props){  
        super(props);  
        this.state = {  
           error:null,  
           todos:[],  
           response: {}  
              
        }  
    }  
  
    componentDidMount(){  
       axios.get(apiUrl).then(response => response.data).then(  
            (result)=>{  
                this.setState({  
                    todos:result.data  
                });  
            },  
            (error)=>{  
                this.setState({error});  
            }  
        )  
    }  
  
      
    deleteTodo(todoId) {  
      const {  todos } = this.state;     
     axios.delete(apiUrl  + todoId).then(result=>{  
       alert(result.status);  
        this.setState({  
          response:result,  
          todos:todos.filter(todo=>todo.todoId !== todoId)  
        });  
      });  
    }  
  
    render(){         
        const{error, todos}=this.state;  
        if(error){  
            return(  
                <div>Error:{error.message}</div>  
            )  
        }  
        else  
        {  
            return(  
         <div>  
                      
                  <Table>  
                    <thead className="btn-primary">  
                      <tr>  
                        <th>Description</th>  
                        <th>status</th>
                        <th>Created Time</th>  
                         
                         
                      </tr>  
                    </thead>  
                    <tbody>  
                      {todos.map(todo => (  
                        <tr key={todo._id}>  
                          <td>{todo.description}</td>  
                          <td>{todo.status}</td>
                          <td>{todo.createdAt}</td>  
                            
                          <td><Button variant="info" onClick={() => this.props.editTodo(todo._id)}>Edit</Button>       
                          <Button variant="danger" onClick={() => this.deleteTodo(todo._id)}>Delete</Button>  
                          
                          </td>  
                        </tr>  
                      ))}  
                    </tbody>  
                  </Table>  
                </div>  
              )  
        }  
    }  
}  
  
export default TodoList;  

