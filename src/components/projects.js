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
                
                <div className="projects-grid">
                
                {/*  project #1 */}
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'afff',height: '176px',background: 'url(https://www.ophtek.com/wp-content/uploads/2014/08/java_tech.jpg) center / cover'}}> Java Project
                        </CardTitle>
                        <CardText>
                            lorem adfsasdasdasdasdasdasd
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style = {{color: 'afff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                </Card>

                {/*  project #2 */}
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'afff',height: '176px',background: 'url(https://www.ophtek.com/wp-content/uploads/2014/08/java_tech.jpg) center / cover'}}> Java Project
                        </CardTitle>
                        <CardText>
                            lorem adfsasdasdasdasdasdasd
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style = {{color: 'afff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                </Card>
                {/*  project #3 */}
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'afff',height: '176px',background: 'url(https://www.ophtek.com/wp-content/uploads/2014/08/java_tech.jpg) center / cover'}}> Java Project
                        </CardTitle>
                        <CardText>
                            lorem adfsasdasdasdasdasdasd
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style = {{color: 'afff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                </Card>

                {/*  project #3 */}
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'afff',height: '176px',background: 'url(https://www.ophtek.com/wp-content/uploads/2014/08/java_tech.jpg) center / cover'}}> Java Project
                        </CardTitle>
                        <CardText>
                            lorem adfsasdasdasdasdasdasd
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style = {{color: 'afff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                </Card>
                
                
                
                </div>
            )
        } else if(this.state.activeTab === 1){
            return(
                <div>
                    <h1>
                        This is React
                    </h1>
                </div>
            )
        }
        else if(this.state.activeTab === 2){
            return(
                <div>
                    <h1>
                        This is Angular
                    </h1>
                </div>
            )
        }
        else if(this.state.activeTab === 3){
            return(
                <div>
                    <h1>
                        This is MongoDB
                    </h1>
                </div>
            )
        }
        else if(this.state.activeTab === 4){
            return(
                <div>
                    <h1>
                        This is others
                    </h1>
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
                <Tab>Other</Tab>
                

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