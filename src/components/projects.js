import React, { Component } from 'react';
import {Tabs, Tab,Grid, Cell,Card,CardTitle, CardActions,CardMenu,IconButton,CardText,Button} from 'react-mdl';
class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeTab: 0
        };
    }
    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div>
                
                <div className="projects-grid">
                
                {/*  project #1 */}
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'afff',height: '176px',background: 'url(https://cloud.githubusercontent.com/assets/23525836/23680700/28d4d366-035a-11e7-98fb-b9284c1b93ba.png) center / cover'}}> The Paint Project
                        </CardTitle>
                        <CardText>
                        This is a project similar to paint which you can use some of the functions to make your drawings .
                        </CardText>
                        <CardText>
                        Japplet 
                        </CardText>
                        <CardActions border>
                            
                            <a href="https://github.com/dhony05/The-paint-project" ref="noopener noreferrer" target="_black"><Button colored >Github</Button></a>
                        </CardActions>

                        {/* <CardMenu style = {{color: 'afff'}}>
                            <IconButton name="share"/>
                        </CardMenu> */}
                </Card>

                {/*  project #2 */}
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'white',height: '176px',background: 'url(https://mail.google.com/mail/u/0?ui=2&ik=6bcc70454e&attid=0.2&permmsgid=msg-a:r8500829331803176273&th=16fa5a654fb79c5a&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ8-idJloor9Kur8DkVlWG9nf7qFEYTEDluNXl7tDS1j0B0pgBt3CLNq_bEisZQmH7YJbeRCcJGBD-rmpYGxfsANsCtF00JvGaJiO54CgcKIEibukIq6jcPEeVs&disp=emb&realattid=ii_k5eaykjm1) center / cover'}}> Dragon firing
                        </CardTitle>
                        <CardText>
                            This project is a game developed using Japplet library. In this game users are able to earn point by firing/houses.
                        </CardText>
                        <CardText>
                        Japplet 
                        </CardText>
                        <CardActions border>
                        <a href="https://github.com/dhony05/Game" ref="noopener noreferrer" target="_black"><Button colored >Github</Button></a>
                            
                        </CardActions>
                        {/* <CardMenu style = {{color: 'afff'}}>
                            <IconButton name="share"/>
                        </CardMenu> */}
                </Card>
                

                {/*  project #3 */}
                
                
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'White',height: '176px',background: 'url(https://cloud.githubusercontent.com/assets/23525836/23681263/5d8b892c-035c-11e7-90b8-30125389d220.png) center / cover'}}> Asteroid
                        </CardTitle>
                        <CardText>
                            This was my first project, back in 2015. A game based on one of the famous 90's games " Asteroid"
                        </CardText>
                      
                        <CardText>
                        Japplet 
                        </CardText>
                        <CardActions border>
                        <a href="https://github.com/dhony05/Asteroid-game" ref="noopener noreferrer" target="_black"><Button colored >Github</Button></a>
                         
                         
                        </CardActions>
                        {/* <CardMenu style = {{color: 'afff'}}>
                            <IconButton name="share"/>
                        </CardMenu> */}
                </Card>
                
                </div>
                

                
                </div>
                
                
            )
        } else if(this.state.activeTab === 1){
            return(
                <div>

                    <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'afff',height: '176px',background: 'url(https://github.com/dhony05/Home-Recipes-ReactAPP/blob/master/Screen%20Shot%202020-01-14%20at%204.37.33%20PM.png?raw=true) center / cover'}}> Home recipe app
                        </CardTitle>
                        <CardText>
                        This project was created following Dev ed's videos on youtube. This application is build in React and consume edamam.com free API                        </CardText>
                      
                        <CardActions border>
                        <a href="https://github.com/dhony05/Home-Recipes-ReactAPP" ref="noopener noreferrer" target="_black"><Button colored >Github</Button></a>
                         
                         
                        </CardActions>
                        {/* <CardMenu style = {{color: 'afff'}}>
                            <IconButton name="share"/>
                        </CardMenu> */}
                </Card>

                            </div>
                    
                </div>
            )
        }
        else if(this.state.activeTab === 2){
            return(
                <div>
                    <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'afff',height: '176px',background: 'url(https://github.com/dhony05/chefProject/blob/master/Screen%20Shot%202020-01-14%20at%205.08.17%20PM.png?raw=true) center / cover'}}> ChefUP
                        </CardTitle>
                        <CardText>
                        This project was developed in colaboration with a team of 4 developer. 
                         Fullstack implementation of a Direct-to-Kitchen Business using Angular and Spring Boot Rest API     
                                 
                        </CardText>
                        <CardText>
                        Java | SpringBoot | TypeScript | MySQL 
                        </CardText>
                      
                        <CardActions border>
                        <a href="https://github.com/dhony05/chefProject" ref="noopener noreferrer" target="_black"><Button colored >Github</Button></a>
                         
                         
                        </CardActions>
                        {/* <CardMenu style = {{color: 'afff'}}>
                            <IconButton name="share"/>
                        </CardMenu> */}
                </Card>
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'afff',height: '176px',background: 'url(https://github.com/dhony05/ArrayFreeLibrary-Angular/blob/master/Screen%20Shot%202020-01-14%20at%205.00.33%20PM.png?raw=true) center / cover'}}> ChefUP
                        </CardTitle>
                        <CardText>
                        This application keep track of awesome links from around the internet.
                        </CardText>
                        <CardText>
                        Java | SpringBoot | TypeScript | MySQL 
                        </CardText>
                      
                        <CardActions border>
                        <a href="https://github.com/dhony05/chefProject" ref="noopener noreferrer" target="_black"><Button colored >Github</Button></a>
                         
                         
                        </CardActions>
                        {/* <CardMenu style = {{color: 'afff'}}>
                            <IconButton name="share"/>
                        </CardMenu> */}
                </Card>

                            </div>
                </div>
            )
        }
        else if(this.state.activeTab === 3){
            return(
                <div>
                    <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'afff',height: '176px',background: 'url(https://github.com/dhony05/4giving/blob/master/Screen%20Shot%202020-01-14%20at%2010.03.30%20PM.png?raw=true) center / cover'}}> 4giving
                        </CardTitle>
                        <CardText>
                        4giving is an application that allows you to search item donators around or be an item donator. It provides you a excelent RESTful API along with MongoDB functionality.
                        </CardText>
                        <CardText>
                        SpringBoot | React | MongoDB
                        </CardText>
                        <CardActions border>
                        <a href="https://github.com/dhony05/4giving" ref="noopener noreferrer" target="_black"><Button colored >Github</Button></a>
                            
                        </CardActions>
                        {/* <CardMenu style = {{color: 'afff'}}>
                            <IconButton name="share"/>
                        </CardMenu> */}
                </Card>
                </div>
                </div>
            )
        }
        else if(this.state.activeTab === 4){
            return(
                <div>
                    <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'afff',height: '176px',background: 'url(https://user-images.githubusercontent.com/23525836/32195508-d1b3d010-bd93-11e7-89fb-a269ac3438e1.png) center / cover'}}> Slot-machine
                        </CardTitle>
                        <CardText>
                        Based on slot machine original game but using random numbers instead. There is two levels , one slot machine with 3 digits and another with 5 digits.
                        </CardText>
                        <CardText>
                        SWIFT | iOS
                        </CardText>
                        <CardActions border>
                        <a href="https://github.com/dhony05/Slot-machine" ref="noopener noreferrer" target="_black"><Button colored >Github</Button></a>
                            
                        </CardActions>
                        {/* <CardMenu style = {{color: 'afff'}}>
                            <IconButton name="share"/>
                        </CardMenu> */}
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'afff',height: '176px',background: 'url(https://github.com/dhony05/dhony05.github.io/blob/master/Screen%20Shot%202020-01-14%20at%203.50.19%20PM.png?raw=true) center / cover'}}> Medicinal herbs
                        </CardTitle>
                        <CardText>
                            This project provides the user a search of medicial herbs.
                        </CardText>
                        <CardText>
                            HTML | CSS | JavaScript | MySQL
                        </CardText>
                        <CardActions border>
                        <a href="https://github.com/dhony05/dhony05.github.io" ref="noopener noreferrer" target="_black"><Button colored >Github</Button></a>
                        <a href="https://dhony05.github.io/HTML/projectDonelys.html" ref="noopener noreferrer" target="_black"><Button colored >Live Demo</Button></a>   
                        </CardActions>
                        {/* <CardMenu style = {{color: 'afff'}}>
                            <IconButton name="share"/>
                        </CardMenu> */}
                </Card>

                
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'',height: '176px',background: 'url(https://cloud.githubusercontent.com/assets/23525836/23682434/cc61b574-0361-11e7-969b-4436dbcc72b4.png) center / cover'}}> Mini Calculator
                        </CardTitle>
                        <CardText>
                            This project allows the users to use the four basic aritmethic properties.
                        </CardText>
                        <CardText>
                            Java 
                        </CardText>
                        <CardActions border>
                        <a href="https://github.com/dhony05/Mini-Calculator" ref="noopener noreferrer" target="_black"><Button colored >Github</Button></a>
                            
                        </CardActions>
                        {/* <CardMenu style = {{color: 'afff'}}>
                            <IconButton name="share"/>
                        </CardMenu> */}
                </Card>
                
                
                </div>
                </div>
            )
        }
    }

    render() { 
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                
                <Tab>Java</Tab>
                <Tab>React</Tab>
                <Tab>Angular</Tab>
                <Tab>MongoDB</Tab>
                <Tab>Others</Tab>
                

                </Tabs>
               
                    <Grid >
                        <Cell col="12">

                        <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                        
                    </Grid>
                    
                
                
            </div>
          );
    }
}
 
export default Projects;