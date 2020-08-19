import React, { Component } from "react";
import Main from "./main";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";

class NavComponent extends Component {
  
  render() {

    const styles = {
      
        background: "white",
        color:"white"
      
    }
    let width = window.innerWidth;
    if (width > 800) {
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

                <Link to="/myskills">Skills</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contactme">Contact me</Link>
              </Navigation>
            </Header>

            <Content>
              <div className="page-content" />
              <Main />
            </Content>
          </Layout>
        </div>
      );
    } else {
      return (
        <div className="demo-big-content">
          <Layout  >
            <Drawer 
            style={{styles}}
              title={
                
                <Link style={{ textDecoration: "none", color: "red" }} to="/">
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

                <Link to="/myskills">Skills</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contactme">Contact me</Link>
              </Navigation>
            </Drawer>

            <Content>
              <div className="page-content" />
              <Main />
            </Content>
          </Layout>
        </div>
      );
    }
  }
}

export default NavComponent;
