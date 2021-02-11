
    import React from 'react';  
    import { Row, Form, Col, Button } from 'react-bootstrap';  
      
    class AddTodo extends React.Component {  
      constructor(props) {  
        super(props);  
       
        this.initialState = {  
          todoId: '',  
          description: '',  
           
        }  
      
        if (props.todoId) {  
          this.state = props.todo 
        } else {  
          this.state = this.initialState;  
        }  
      
        this.handleChange = this.handleChange.bind(this);  
        this.handleSubmit = this.handleSubmit.bind(this);  
      
      }  
      
      handleChange(event) {  
        const name = event.target.name;  
        const value = event.target.value;  
      
        this.setState({  
          [name]: value  
        })  
      }  
      
      handleSubmit(event) {  
        event.preventDefault();  
        this.props.onFormSubmit(this.state);  
        this.setState(this.initialState);  
      }  
      render() {  
        let pageTitle;  
        let actionStatus;  
        if (this.state.todoId) {  
      
          pageTitle = <h2>Edit </h2>  
          actionStatus = <b>Update</b>  
        } else {  
          pageTitle = <h2>Add Tod</h2>  
          actionStatus = <b>Save</b>  
        }  
      
        return (  
          <div>        
            <h2> {pageTitle}</h2>  
            <Row>  
              <Col sm={7}>  
                <Form onSubmit={this.handleSubmit}>  
                  <Form.Group controlId="Title">  
                    <Form.Label>Title</Form.Label>  
                    <Form.Control  
                      type="text"  
                      name="description"  
                      value={this.state.description}  
                      onChange={this.handleChange}  
                      placeholder="Description" />  
                      <Button variant="success" type="submit">{actionStatus}</Button> 
                  </Form.Group>  
                </Form>  
              </Col>  
            </Row>  
          </div>  
        )  
      }  
    }  
      
 export default AddTodo; 
   