import React from "react";

import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import "./App.css";
import Main from "./components/main";
import {HashRouter, Link } from "react-router-dom";

function App() {
  return (
    <HashRouter basename="/">
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
    </HashRouter>
  );
}

export default App;
