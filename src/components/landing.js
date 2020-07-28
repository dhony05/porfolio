import React, { Component } from 'react';
import codewars from './codewars.svg'
// import logo from '../logo.svg'
// import { Icon} from '@iconify/react';
// import codewarsIcon from '@iconify/icons-simple-icons/codewars';
import {Grid,Cell} from 'react-mdl';

class Landing extends Component {
    state = {  }
    render() { 
        return (
            <div style ={{width:'100%',margin: 'auto'}}>
              <Grid className="landing-grid">
                  <Cell col={12}>
                      <img 
                      src="https://dhony05.github.io/imgs/img/profile.jpg"
                      alt="avatar"
                      className="avatar-img"

                      />
                      
                      <div className="banner-text">
                          <h1>Software Developer</h1>

                        <hr/>

                        <p>Java | JavaScript | Python | SpringBoot | HTML/CSS | Bootstrap  | MySQL | MongoDB | Angular 7 | React | GraphQL</p>
                        <div className="social-links">
                            {/** LinkedIn */}
                            <a href="https://www.linkedin.com/in/donelysfa/" ref="noopener noreferrer" target="_black">
                            <i className="fa fa-linkedin-square" aria-hidden="true"/>
                            </a>

                              {/** Github */}
                              <a href="https://github.com/dhony05" ref="noopener noreferrer" target="_black">
                            <i className="fa fa-github-square" aria-hidden="true"/>
                            </a>

                              {/** Hackerrank */}
                              <a href="https://www.hackerrank.com/donelys05" ref="noopener noreferrer" target="_black">
                              <i class="fab fa-hackerrank" ></i>
                            </a>
                            {/** codewars */}
                            <a href="https://www.codewars.com/users/dhony05" ref="noopener noreferrer" target="_black">
                            {/* <Icon icon={codewarsIcon} className="codewars" /> */}
                            <img src={codewars} className="codewars" alt="code" />
 
                            </a>

                            {/** Wordpress*/}
                            <a href="http://dhonylearning.home.blog/" ref="noopener noreferrer" target="_black">
                            <i class="fab fa-wordpress-simple"></i>
                            
                            </a>  

                             {/** Youtube */}
                             <a href="https://www.youtube.com/channel/UCYsrJPbVtQRvCfeBWY1IrvQ" ref="noopener noreferrer" target="_black">
                            <i className="fa fa-youtube-square" aria-hidden="true"/>
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