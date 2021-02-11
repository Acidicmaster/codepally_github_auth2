import React, { Component } from 'react'
import ProjectActions from '../Project/ProjectActions';
import TodoActions from '../Todo/TodoActions';

export default class Main extends Component {
    
    render() {
        return (
    
             <div>
                <ProjectActions/>
            <div>
<            TodoActions/>
            </div>
             </div>
                
            
            
        )
    }

}
