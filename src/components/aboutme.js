import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Mydp from "../mydp.jpg";

class About extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={2}></Cell>
          <Cell col={8}>
            <div style={{ textAlign: "center" }}>
              <img
                src={Mydp}
                alt="avatar"
                style={{
                  paddingTop: "70px",
                  borderRadius: "50%",
                  height: "300px",
                  width: "250px",
                }}
              />
            </div>
            <h2 style={{ paddingTop: "0.5em" }}>Mallika Goel</h2>
            <h4 style={{ color: "black" }}>
              NIT Delhi | Coding Enthusiast | Web Developer
            </h4>
            <hr
              style={{
                marginLeft: "50px",
                borderTop: "3px solid black",
                width: "85%",
              }}
            />
            <h4>
              Hello! I am Mallika Goel and I am a third-year undergraduate at
              National Institute Of Technology, Delhi enrolled in B.Tech of
              Electrical and Electronics Engineering. Despite being in EEE
              branch I am passionate about Computer Science and technology.
            </h4>
            <h4>
              {" "}
              I have been developing websites for around 1 year. Most of my
              experience lies in full stack development, data structure and
              algorithms. I have worked with HTML/CSS, JavaScript, Python,
              Django, Flask, C++ and a little bit of Tkinter.
            </h4>
            <h4>
              I am an active writer on Quora. I have more than 1.9 million views
              on the answers. I write about technology, my personal life, health
              and personality development.
            </h4>
            <h4>
              As engineers, we see new opportunities unfolding daily.New
              technologies emerge regularly that we need to master to succeed.
              These opportunities are wonderful, but at times they can be
              intimidating. But we should believe in life-long learning as it is
              energizing, stimulating, and yes, it’s good for business.
            </h4>
            <h4>
              Therefore, my objective is to work for an organization which
              provides me the opportunity to improve my skills and knowledge to
              grow along with the organization objective.
            </h4>
            <hr
              style={{
                marginLeft: "50px",
                borderTop: "3px solid black",
                width: "85%",
              }}
            />
            <div className="social-links">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/mallika-goel/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>

              {/* Github */}
              <a
                href="https://github.com/mallikagoel1602"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github" aria-hidden="true" />
              </a>

              {/* Quora */}
              <a
                href="https://www.quora.com/profile/Mallika-Goel-5"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-quora" aria-hidden="true" />
              </a>

              {/* Youtube */}
              <a
                href="https://www.youtube.com/channel/UCUPiuJ9b-1dd-_dcxXRr0YQ"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-youtube-square" aria-hidden="true" />
              </a>
            </div>
            <hr
              style={{
                marginLeft: "50px",
                borderTop: "3px solid black",
                width: "85%",
              }}
            />
          </Cell>
          <Cell col={2}></Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
