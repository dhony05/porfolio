import React, { Component } from 'react';
import{Grid,Cell, ProgressBar} from 'react-mdl';

class SkillBars extends Component {
        state = { };
    
    render() { 
        return ( 
           
            <Grid >
                <Cell col={12}>
                   <div  style={{display: 'flex', marginLeft:'1rem' , }}> {this.props.skill } 
                   <ProgressBar style={{marginLeft:'auto',width: '75%'}}
                   progress={this.props.progress} buffer={85} />
                   
                   </div>
                   

                </Cell>
                
            </Grid>

            

         );
    }
}

export default SkillBars;