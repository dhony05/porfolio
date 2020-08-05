import React, { Component } from 'react';
import Main from "./main";
import { Layout,Header, Navigation, Drawer,Content} from "react-mdl";
import { Link } from "react-router-dom";


class NavComponent extends Component {
    render() {
        let width = window.innerWidth;
        if(width>700){
        return ( 
           
                <div className="demo-big-content">
                <Layout>
                <Header
          className="header-color"
          title={
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
               Profile{" "}
            </Link>
          }
          scroll
        >
          <Navigation>
          <Link to="/aboutme">About me</Link>
            <a
              href="https://drive.google.com/file/d/1jYPWM_KJPWZPA6_PBAHp1siSUQeBIiJE/view?usp=sharing"
              target="_black"
            >
              Resume
            </a>
            
            <Link to="/skills">Skills</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>

        <Content>
          <div className="page-content" />
          <Main />
        </Content>
        
                    </Layout>


                </div>


         
         );
        }else {
            return(
                <div className="demo-big-content">
                <Layout>
                <Drawer
          title={
            <Link style={{ textDecoration: "none", color: "Black" }} to="/">
              Profile{" "}
            </Link>
          }
        >
          <Navigation>
          <Link to="/aboutme">About me</Link>
          <a
              href="https://drive.google.com/file/d/1jYPWM_KJPWZPA6_PBAHp1siSUQeBIiJE/view?usp=sharing"
              target="_black"
            >
              Resume
            </a>
            
            <Link to="/skills">Skills</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer> 

        <Content>
          <div className="page-content" />
          <Main />
        </Content>
        </Layout>
        </div>
            )
        }
    }
}
 
export default NavComponent;