import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://image.flaticon.com/icons/png/512/53/53176.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Mallika Goel</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              I am a third-year undergraduate at National Institute Of
              Technology, Delhi. I have been developing websites for around 1
              year. Most of my experience lies in full stack development, data
              structure and algorithms. I have worked with HTML/CSS, JavaScript,
              Python, Django, Flask, C++ and a little bit of Tkinter.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>
              A-7 Institutional Area, National Institutte Of technology, Delhi
            </p>
            <h5>Phone</h5>
            <p> (+91)-8318450173</p>
            <h5>Email</h5>
            <p>171230028@nitdelhi.ac.in</p>
            <h5>Web</h5>
            <p>mallikagoel.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2017}
              endYear={2021}
              schoolName="NIT DELHI"
              schoolBranch="Electrical and Electronics Engineering"
              schoolDescription="Bachelor in Technology"
              score="CGPA: 8.23"
            />

            <Education
              startYear={2014}
              endYear={2016}
              schoolName="Mother Teresa Mission Higher Secondary School"
              schoolBranch="Board: ICSE/ISC"
              schoolDescription="Higher Secondary Certificate (PCM)"
              score="Overall Percentage: 94.5%"
            />

            <Education
              startYear={2008}
              endYear={2014}
              schoolName="Mother Teresa Mission Higher Secondary School"
              schoolBranch="Board: ICSE/ISC"
              schoolDescription="Secondary School Certificate"
              score="Overall Percentage: 92.6%"
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>

            <Experience
              startMonth="June"
              startYear={2019}
              endMonth="July"
              endYear={2020}
              jobName="Web Development Intern"
              companyName="Project Eco Earth"
              jobDescription="Worked on loyalty program design and algorithm, to make transactions easy for consumers. Also contributed to selling waste dashboard of users to track their activity in a simple way."
            />

            <Experience
              startMonth="Dec"
              startYear={2019}
              endMonth="Jan"
              endYear={2020}
              jobName="Content Intern"
              companyName="Airblack"
              jobDescription="Collaborated with the product team to add additional features enhancing the user experience of the Airblack website. Also helped in selecting and finalizing the images for the Airblack app as well as website using image curation tool."
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Skills</h2>
            <Skills skill="C++" progress={90} />
            <Skills skill="Python" progress={70} />
            <Skills skill="Django" progress={80} />
            <Skills skill="React" progress={80} />
            <Skills skill="Bootstrap" progress={80} />
            <Skills skill="Data Structure and Algorithms" progress={85} />
            <Skills skill="HTML/CSS" progress={80} />
            <Skills skill="Node JS" progress={80} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
