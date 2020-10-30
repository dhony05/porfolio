import React, { Component } from 'react';
import codewars from './codewars.svg'
import {Grid,Cell} from 'react-mdl';

class Landing extends Component {
    state = {  }
    render() { 
        return (
            <div style ={{width:'100%',margin: '50%'}}>
              <Grid className="landing-grid">
                  <Cell col={12}>
        
                      
                      <div className="banner-text">
                          <h1>Software Developer</h1>
                          <img 
                      src="https://github.com/dhony05/first-page/blob/master/imgs/IMG_2797%202.jpg?raw=true"
                      alt="avatar"
                      className="avatar-img"

                      />
                          <h2>Donelys Familia</h2>

                        <hr/>

                        <p>Java | JavaScript | Python | SpringBoot | HTML/CSS | Bootstrap  | MySQL | MongoDB | Angular 7 | React | GraphQL</p>
                        <div className="social-links">
                            {/** LinkedIn */}
                            
                            <a href="https://www.linkedin.com/in/donelysfa/" ref="noopener noreferrer" target="_black">
                            <i className=" except ani1 bouci1 fab fa-linkedin-square " aria-hidden="true"/>
                            </a>
                            

                              {/** Github */}
                              <a href="https://github.com/dhony05" ref="noopener noreferrer" target="_black">
                            <i className="ani1 bouci1 fab fa-github-square" aria-hidden="true"/>
                            </a>

                              {/** Hackerrank */}
                              <a href="https://www.hackerrank.com/donelys05" ref="noopener noreferrer" target="_black">
                              <i className="ani1 bouci1 fab fa-hackerrank" ></i>
                            </a>
                            {/** codewars */}
                            <a href="https://www.codewars.com/users/dhony05" ref="noopener noreferrer" target="_black">
                            {/* <Icon icon={codewarsIcon} className="codewars" /> */}
                            <img src={codewars} className="ani1 bouci1 codewars" alt="code" />
 
                            </a>

                            {/** Wordpress*/}
                            <a href="http://dhonylearning.home.blog/" ref="noopener noreferrer" target="_black">
                            <i class="ani1 bouci1 fab fa-wordpress-simple"></i>
                            
                            </a>  

                             {/** Youtube */}
                             <a href="https://www.youtube.com/channel/UCYsrJPbVtQRvCfeBWY1IrvQ" ref="noopener noreferrer" target="_black">
                            <i className="ani1 bouci1 fab fa-youtube-square" aria-hidden="true"/>
                            </a>




                        </div>
                      </div>
                      
                  </Cell>
              </Grid>
            </div>
          );
    }
}
 
export default Landing;