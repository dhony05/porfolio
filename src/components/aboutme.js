import React, { Component } from 'react';
import {Grid,Cell} from "react-mdl";

class AboutMe extends Component {
    state = {  }
    render() { 
        return (  
            <Grid className="aboutme-body">
                <Cell col={12} style={{background:'rbga(0,0,0,04)'}}>
                <div className="box">
                <img src="https://github.com/dhony05/first-page/blob/master/imgs/img/profile.jpg?raw=true" alt="profile" className="box-img"/>
                <h1>About Me</h1>
                <p>Hey! Welcome, my name is Donelys Familia.</p>
                <p>I graduated with a bachelor degree in computer science at CUNY Lehman College in 2018.
                </p>
                <p>In college I joined great clubs/organizations like NSBE, SHPE, and GDG which helped me to be more involved in the technology field and also to make connections. </p>
                <p>Since I was a kid I was fascinated for technology and sciences, I wanted to know how everything works, fix it and create my own and that's why I decided to become part of this awesome field.</p>

            </div>

                </Cell>


            

            </Grid>
        );
    }
}
 
export default AboutMe;