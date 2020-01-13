import React, { Component } from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import codewarsIcon from '@iconify/icons-simple-icons/codewars';
import {Grid,Cell} from 'react-mdl';

class Landing extends Component {
    state = {  }
    render() { 
        return (
            <div style ={{width:'100%',margin: 'auto'}}>
              <Grid className="landing-grid">
                  <Cell col={12}>
                      <img 
                      src="https://scontent-lga3-1.xx.fbcdn.net/v/l/t1.0-9/31084285_10211595028376628_617496875599134720_o.jpg?_nc_cat=106&_nc_ohc=r4EX_V6sTuMAX_Qkg0E&_nc_ht=scontent-lga3-1.xx&oh=418cb3693ea8094ba3d6bfe06262ab1b&oe=5EA08259"
                      alt="avatar"
                      className="avatar-img"

                      />
                      <div className="banner-text">
                          <h1>Software Developer</h1>

                        <hr/>

                        <p>Java | JavaScript |Python | SpringBoot | HTML/CSS | Bootstrap | Angular 8 | React | MySQL | MongoDB</p>
                        <div className="social-links">
                            {/** LinkedIn */}
                            <a href="http://google.com" ref="noopener noreferrer" target="_black">
                            <i className="fa fa-linkedin-square" aria-hidden="true"/>
                            </a>

                              {/** Github */}
                              <a href="http://google.com" ref="noopener noreferrer" target="_black">
                            <i className="fa fa-github-square" aria-hidden="true"/>
                            </a>

                              {/** Hackerrank */}
                              <a href="https://www.hackerrank.com/donelys05" ref="noopener noreferrer" target="_black">
                              <i class="fab fa-hackerrank" ></i>
                            </a>
                            {/** codewars */}
                            <a href="https://www.codewars.com/users/dhony05" ref="noopener noreferrer" target="_black">
                            <Icon icon={codewarsIcon} className="codewars" />
                            </a>

                            {/** Wordpress*/}
                            <a href="http://dhonylearning.home.blog/" ref="noopener noreferrer" target="_black">
                            <i class="fab fa-wordpress-simple"></i>
 
                            </a>  

                             {/** Youtube */}
                             <a href="http://google.com" ref="noopener noreferrer" target="_black">
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