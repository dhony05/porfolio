import React, { Component } from 'react';
import SkillBars from './skillBars';
import {Grid,Cell} from 'react-mdl';

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="skills-grid">
                <h1> Skills</h1>
                <hr/>
                <Grid> 
                    <Cell col={12}>
                    <SkillBars
                    skill="Java"
                    progress="80"
                    />
                     <SkillBars
                    skill="JavaScript"
                    progress="67"
                    />
                    <SkillBars
                    skill="Spring MVC"
                    progress="65"
                    />
                    <SkillBars
                    skill="MySql"
                    progress="65"
                    />

                    <SkillBars
                    skill="HTML/CSS"
                    progress="60"
                    />
                    <SkillBars
                    skill="React"
                    progress="50"
                    />
                    <SkillBars
                    skill="Angular"
                    progress="50"
                    />
                    
                    <SkillBars
                    skill="MongoDB"
                    progress="50"
                    />
                    <SkillBars
                    skill="Bootstrap"
                    progress="50"
                    />
                    
                    <SkillBars
                    skill="Python"
                    progress="45"
                    />
                    

                    </Cell>
                </Grid>
                
              

            </div>
         );
    }
}
 
export default Skills;