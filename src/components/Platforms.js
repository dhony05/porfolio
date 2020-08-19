import React,{Component} from 'react';
import Platform from './Platform';




class Platforms extends Component{
    state ={
        contacts:[
            { id:"012",platform:"gmail",value:"donelysprivate@gmail.com",icon:"ani1 bouci1 c-card-icon far fa-envelope",valueRef:"mailto:donelysprivate@gmail.com"},
            {id:"013",platform:"phone",value:"(347) 549-8652",icon:"ani1 bouci1  c-card-icon fas fa-mobile",valueRef:"tel:3455498652"},
            {id:"014",platform:"skype",value:"donelys05",icon:"ani1 bouci1 c-card-icon fab fa-skype",valueRef:"skype:donelys05?chat"}

           
        ]
    }

    render(){
        return(
            this.state.contacts.map((contact) =>{
                return <Platform 
                icon ={contact.icon}
                platform ={contact.platform}
                value={contact.value}
                key={contact.id}
                valueRef={contact.valueRef}
                
                />;
            })
        )

       

    }
}

    


export default Platforms;