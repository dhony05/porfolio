import React from 'react';
import Landing from './landing';
import AboutMe from "./aboutme";
import Contactme from "./contactme";
// import Contact from "./contact";
import Projects from "./projects";
import MySkills from "./mySkills";
import {Switch, Route} from 'react-router-dom';


// this component will controll all the router

const Main = () => (
    <Switch>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/aboutme" component={AboutMe}/>
      <Route exact path="/projects" component={Projects}/>
      {/* <Route exact path="/contact" component={Contact}/> */}
      <Route exact path="/myskills" component={MySkills}/>
      <Route exact path="/contactme" component={Contactme}/>


    </Switch>
)

export default Main;