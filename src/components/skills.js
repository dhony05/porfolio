import React, { Component } from 'react';
import SkillBars from './skillBars';

class Skills extends Component {
    
        
        state = { 
            skills: [
                {skillName:"Java", iconClass:"devicon-java-plain-wordmark colored",progress:"68"},
                {skillName:"JavaScript", iconClass:"devicon-javascript-plain colored",progress:"62"},
                {skillName:"Spring Boot", iconClass:"fa far fa-power-off iconGreen",progress:"59" },
                {skillName:"MySQL", iconClass:"devicon-mysql-plain-wordmark colored",progress:"56"},
                {skillName:"HTML", iconClass:"devicon-html5-plain-wordmark colored",progress:"55"},
                {skillName:"CSS", iconClass:"devicon-css3-plain-wordmark colored",progress:"50"},
                {skillName:"Boostrap", iconClass:"devicon-bootstrap-plain-wordmark colored",progress:"50"},
                {skillName:"React", iconClass:"devicon-react-original-wordmark colored",progress:"45"},
                {skillName:"MongoDB", iconClass:"devicon-mongodb-plain-wordmark colored",progress:"38"},
                {skillName:"Python", iconClass:"devicon-python-plain-wordmark colored",progress:"29"},
                {skillName:"Angular", iconClass:"devicon-angularjs-plain colored",progress:"20"},
                {skillName:"Graphql", iconClass:"icons8-graphql",progress:"20"},
                {skillName:"AWS", iconClass:"devicon-amazonwebservices-plain-wordmark colored",progress:"10"},

            ]

         };
    
    render() {
        return (
        this.state.skills.map((skill,index) =>{
        return <SkillBars skill={skill.skillName}
                          icon={skill.iconClass}
                      progress={skill.progress}/>;
       
        }))
        
    }
}
 
export default Skills;