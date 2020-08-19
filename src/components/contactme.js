import React, {Component} from 'react';
import Platforms from './Platforms';
import './Contactme.css';


class Contactme extends Component {
    state = { 
       
        showPlatforms: false
     }

     tooglePlatforms = () =>{
        console.log("clicked");

         const doesShow = this.state.showPlatforms;
         this.setState({showPlatforms: !doesShow});
     }
    render() { 
        
        // let contacts = null;

        // if(this.state.showPlatforms){
        //     contacts = 

        // }
        return (
            <div className="contact-body">
                <div className="contact-info">
                    
          

                <Platforms/>
                    
                </div>
            </div>
            


         );
    }
}
 
export default Contactme;