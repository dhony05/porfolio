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
                <h1 classNa> Skills</h1>
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
                    skill="Spring Boot"
                    progress="65"
                    />
                    <SkillBars
                    skill="MySql"
                    progress="56"
                    />

                    <SkillBars
                    skill="HTML/CSS"
                    progress="55"
                    />
                    <SkillBars
                    skill="Bootstrap"
                    progress="50"
                    />
                    <SkillBars
                    skill="Angular"
                    progress="40"
                    />
                    <SkillBars
                    skill="MongoDB"
                    progress="38"
                    />

                    <SkillBars
                    skill="React"
                    progress="30"
                    />
                    
                    <SkillBars
                    skill="Python"
                    progress="29"
                    />
                     <SkillBars
                    skill="GraphQL"
                    progress="15"
                    />
                    <SkillBars
                    skill="AWS"
                    progress="10"
                    />
                   

                    

                    </Cell>
                </Grid>
                
              

            </div>
         );
    }
}
 
export default Skills;