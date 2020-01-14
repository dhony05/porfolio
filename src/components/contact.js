import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Donelys Familia</h2>
            <img
              src="https://scontent-lga3-1.xx.fbcdn.net/v/l/t1.0-9/31084285_10211595028376628_617496875599134720_o.jpg?_nc_cat=106&_nc_ohc=r4EX_V6sTuMAX_Qkg0E&_nc_ht=scontent-lga3-1.xx&oh=418cb3693ea8094ba3d6bfe06262ab1b&oe=5EA08259"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Welcome and thanks for visiting my website
            </p>
          </Cell>

          <Cell col={6}>
            <h2> Contact me</h2>
            <hr />
            <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (347) 549-8652
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    donelysprivate@gmail.com
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    donelys05
                </ListItemContent>
              </ListItem>
            </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
