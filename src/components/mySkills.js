import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';
import Skills from './skills'


class MySkills extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="skills-grid">
                 <h1 > Skills</h1>
                 <hr/>
             <Grid> 
                 <Cell col={12}>
                     <Skills></Skills>

                 </Cell>
                 </Grid>
                 </div>
         );
    }
}
 
export default MySkills;