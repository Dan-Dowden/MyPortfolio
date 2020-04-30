import React, {useState} from 'react';
import AboutMe from './bodyContent/aboutMe'
import Flipper from './bodyContent/flipper'
import Skill from './bodyContent/skill'
import {frontEndSkills, backEndSkills, otherSkills} from './bodyContent/skillDefinitions'


const Body = ({size}) => (
  <div className="body">
    <AboutMe/>
    <div className="skills">
      <div className="content">
      <Skill
        icon="fa fa-laptop"
        header="Front End"
        skills={frontEndSkills}
      />
      <Skill
        icon="fa fa-server"
        header="Back End"
        skills={backEndSkills}
      />
      <Skill
        icon="fa fa-book"
        header="Other"
        skills={otherSkills}
      />
      </div>
    </div>
    <div className="projects">
    <h3>
      My Projects.
    </h3>
    <div className="content">
      <Flipper src="https://my-dev-portfolio.s3-ap-southeast-2.amazonaws.com/wheres-my-money.png" project="wheresMyMoney"/>
      <Flipper src="http://localhost:3000/teaTime.jpg" project="teaTime"/>
      <Flipper src="http://localhost:3000/gymTracker.jpg" project="gymTracker"/>
    </div>
    </div>
  </div>
)

export default Body;
