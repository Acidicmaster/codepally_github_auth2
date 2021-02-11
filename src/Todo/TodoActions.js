

    import React, { Component } from 'react';  
      
    import { Container, Button } from 'react-bootstrap';  
    import TodoList from './GetTodo';  
    import AddTodo from './AddTodo';  
    import axios from 'axios';  
    const apiUrl = 'http://localhost:9000/api/todo/';  
      
    class TodoActionApp extends Component {  
      constructor(props) {  
        super(props);  
      
        this.state = {  
          isAddTodo: false,  
          error: null,  
          response: {},  
          todoData: {},  
          isEditTodo: false,  
          isTodoDetails:true,  
        }  
      
        this.onFormSubmit = this.onFormSubmit.bind(this);  
      
      }  
      
      onCreate() {  
        this.setState({ isAddTodo: true });  
        this.setState({ isTodoDetails: false });  
      }  
      onDetails() {  
        this.setState({ isTodoDetails: true });  
        this.setState({ isAddTodo: false });  
      }  
      
      onFormSubmit(data) {  
        this.setState({ isAddTodo: true });  
        this.setState({ isTodoDetails: false });  
        if (this.state.isEditTodo) {  
         axios.put(apiUrl , data).then(result => {  
          alert('success');  
            this.setState({  
              response:result,    
              isAddTodo: false,  
              isEditTodo: false  
            })  
          });  
        } else {  
         
         axios.post(apiUrl , data).then(result => {  
          alert('success');  
            this.setState({  
              response:result,    
              isAddTodo: false,  
              isEditTodo: false  
            })  
          });  
        }  
        
      }  
      
      editTodo = todoId => {  
      
        this.setState({ isTodoDetails: false });  
       axios.get(apiUrl  + todoId).then(result => {  
      
            this.setState({  
              isEditTodo: true,  
              isAddTodo: true,  
              todoData: result.data           
            });  
          },  
          (error) => {  
            this.setState({ error });  
          }  
        )  
         
      }  
      
      render() {  
        
        let todoForm;  
        if (this.state.isAddTodo || this.state.isEditTodo) {  
      
          todoForm = <AddTodo onFormSubmit={this.onFormSubmit} project={this.state.todoData} />  
           
        }  
        return (  
          <div className="App">  
     <Container>  
            <h1 style={{ textAlign: 'center' }}>Code Pally Project</h1>  
            <hr></hr>  
            {!this.state.isTodoDetails && <Button variant="primary" onClick={() => this.onDetails()}> Todo Details</Button>}  
            {!this.state.isAddTodo && <Button variant="primary" onClick={() => this.onCreate()}>Add Todo</Button>}  
            <br></br>  
            {!this.state.isAddTodo && <TodoList editTodo={this.editTodo} />}  
            {todoForm}  
            </Container>  
          </div>  
        );  
      }  
    }  
    export default TodoActionApp;