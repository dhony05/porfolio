import React from 'react';
import Landing from './landing';
import AboutMe from "./aboutme";
import Resume from "./resume";
import Contact from "./contact";
import Projects from "./projects";
import {Switch, Route} from 'react-router-dom';


// this component will controll all the router

const Main = () => (
    <Switch>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/aboutme" component={AboutMe}/>
      <Route exact path="/projects" component={Projects}/>
      <Route exact path="/resume" component={Resume}/>
      <Route exact path="/contact" component={Contact}/>

    </Switch>
)

export default Main;