
    import React from 'react';  
    import { Row, Form, Col, Button } from 'react-bootstrap';  
      
    class AddProject extends React.Component {  
      constructor(props) {  
        super(props);  
       
        this.initialState = {  
          projectId: '',  
          title: '',  
           
        }  
      
        if (props.project.projectId) {  
          this.state = props.project 
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
        if (this.state.projectId) {  
      
          pageTitle = <h2>Edit Project</h2>  
          actionStatus = <b>Update</b>  
        } else {  
          pageTitle = <h2>Add Project</h2>  
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
                      name="title"  
                      value={this.state.title}  
                      onChange={this.handleChange}  
                      placeholder="Title" />  
                      <Button variant="success" type="submit">{actionStatus}</Button> 
                  </Form.Group>  
                </Form>  
              </Col>  
            </Row>  
          </div>  
        )  
      }  
    }  
      
 export default AddProject; 
   