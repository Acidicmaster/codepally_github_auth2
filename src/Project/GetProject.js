import React from 'react';  
import { Table,Button } from 'react-bootstrap';  
import axios from 'axios';  
  
const apiUrl = 'http://localhost:9000/api/project/';  
  
class ProjectList extends React.Component{  
    constructor(props){  
        super(props);  
        this.state = {  
           error:null,  
           projects:[],  
           response: {}  
              
        }  
    }  
  
    componentDidMount(){  
       axios.get(apiUrl).then(response => response.data).then(  
            (result)=>{  
                this.setState({  
                    projects:result.data  
                });  
            },  
            (error)=>{  
                this.setState({error});  
            }  
        )  
    }  
  
      
    deleteProject(projectId) {  
      const {  projects } = this.state;     
     axios.delete(apiUrl + '/' + projectId).then(result=>{  
       alert(result.data);  
        this.setState({  
          response:result,  
          projects:projects.filter(project=>project.projectId !== projectId)  
        });  
      });  
    }  
  
    render(){         
        const{error, projects}=this.state;  
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
                        <th>Title</th>  
                        <th>Created Time</th>  
                         
                         
                      </tr>  
                    </thead>  
                    <tbody>  
                      {projects.map(project => (  
                        <tr key={project._id}>  
                          <td>{project.title}</td>  
                          <td>{project.createdAt}</td>  
                            
                          <td><Button variant="info" onClick={() => this.props.editProject(project._id)}>Edit</Button>       
                          <Button variant="danger" onClick={() => this.deleteProject(project._id)}>Delete</Button>  
                          
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
  
export default ProjectList;  

