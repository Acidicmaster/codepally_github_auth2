

    import React, { Component } from 'react';  
      
    import { Container, Button } from 'react-bootstrap';  
    import ProjectList from './GetProject';  
    import AddProject from './AddProject';  
    import axios from 'axios';  
    const apiUrl = 'http://localhost:9000/api/project/';  
      
    class ProjectActionApp extends Component {  
      constructor(props) {  
        super(props);  
      
        this.state = {  
          isAddProject: false,  
          error: null,  
          response: {},  
          projectData: {},  
          isEditproject: false,  
          isProjectDetails:true,  
        }  
      
        this.onFormSubmit = this.onFormSubmit.bind(this);  
      
      }  
      
      onCreate() {  
        this.setState({ isAddProject: true });  
        this.setState({ isProjectDetails: false });  
      }  
      onDetails() {  
        this.setState({ isProjectDetails: true });  
        this.setState({ isAddProject: false });  
      }  
      
      onFormSubmit(data) {  
        this.setState({ isAddProject: true });  
        this.setState({ isProjectDetails: false });  
        if (this.state.isEditproject) {  
         axios.put(apiUrl , data).then(result => {  
          alert('success');  
            this.setState({  
              response:result,    
              isAddProject: false,  
              isEditProject: false  
            })  
          });  
        } else {  
         
         axios.post(apiUrl , data).then(result => {  
          alert(result.status);  
            this.setState({  
              response:result,    
              isAddProject: false,  
              isEditProject: false  
            })  
          });  
        }  
        
      }  
      
      editProject = ProjectId => {  
      
        this.setState({ isProjectDetails: false });  
       axios.get(apiUrl  + ProjectId).then(result => {  
      
            this.setState({  
              isEditProject: true,  
              isAddProject: true,  
              projectData: result.data           
            });  
          },  
          (error) => {  
            this.setState({ error });  
          }  
        )  
         
      }  
      
      render() {  
        
        let projectForm;  
        if (this.state.isAddProject || this.state.isEditProject) {  
      
          projectForm = <AddProject onFormSubmit={this.onFormSubmit} project={this.state.projectData} />  
           
        }  
        return (  
          <div className="App">  
     <Container>  
            <h1 style={{ textAlign: 'center' }}>Code Pally Project</h1>  
            <hr></hr>  
            {!this.state.isProjectDetails && <Button variant="primary" onClick={() => this.onDetails()}> Project Details</Button>}  
            {!this.state.isAddProject && <Button variant="primary" onClick={() => this.onCreate()}>Add Project</Button>}  
            <br></br>  
            {!this.state.isAddProject && <ProjectList editProject={this.editProject} />}  
            {projectForm}  
            </Container>
          </div>  
        );  
      }  
    }  
    export default ProjectActionApp;