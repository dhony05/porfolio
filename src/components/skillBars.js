import React, { Component } from 'react';
import{Grid,Cell, ProgressBar} from 'react-mdl';

class SkillBars extends Component {
 
        state = { };
  
    render() { 
        
        return ( 
           
            <Grid >
                <Cell col={12}>
                   <div  style={{display: 'flex', marginLeft:'1rem' , }}> {this.props.skill } 
                   <i style={{fontSize:"50px"}}class={this.props.icon} ></i>
                   
                   <ProgressBar className="progress" style={{marginLeft:'auto'}}
                   progress={this.props.progress} buffer={85} />
                   
                   </div>
                   

                </Cell>
                
            </Grid>

            

         );
    }
}

export default SkillBars;