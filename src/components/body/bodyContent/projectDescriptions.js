import React from 'react'
const WhereMyMoneyDescription = ({size}) => (
    <div className="backContent" style={{margin: size.width/15}}>
      <h4 style={{fontSize: (size.width/11), marginTop: 0}}>
        Wheres My Money
      </h4>
      <div className="icons">
        <i
          className="fa fa-desktop"
          style={{fontSize: (size.width/7)}}
          onClick={()=>window.open("http://wheres-my-money.s3-website-ap-southeast-2.amazonaws.com/", '_blank')}
        />
        <i
          className="fa fa-github"
          style={{fontSize: (size.width/7)}}
          onClick={()=>window.open("https://github.com/DD-NZ/TeaTime", '_blank')}
        />
      </div>
      <p style={{fontSize: (size.width/20), marginTop: 0}}>
        Wheres My Money is a tool which helps to visualise your bank statement.
      </p>
      <p style={{fontSize: (size.width/20)}}>
        I Developed this to help identify trends in my money spending and help to budget better week to week.
      </p>
      <p style={{fontSize: (size.width/20)}}>
        This project helped to improve my React skills, learing alot about development of an entire project from design to deployment.
      </p>
      <p style={{fontSize: (size.width/20)}}>
        For this project my main goals were focused on creating a fast and intuative UI. To achieve this is used Material UI to help with styling, as well as well as designing the architecture to be able to display and filter large numbers of transactions smoothly.
      </p>
    </div>
  )
const GymTrackerDescription = ({size}) => (
  <div className="backContent" style={{margin: size.width/15}}>
      <h4 style={{fontSize: (size.width/11), marginTop: 0}}>
      Gym Tracker
    </h4>
    <div className="icons">
      <i
        className="fa fa-github"
        style={{fontSize: (size.width/7)}}
        onClick={()=>window.open("https://github.com/DD-NZ/GymTracker", '_blank')}
      />
    </div>
    <p style={{fontSize: (size.width/20), marginTop: 0}}>
      Gym Tracker is an android application which helps to track progress at the gym.
    </p>
    <p style={{fontSize: (size.width/20)}}>
      I developed this app to help me push myself harder at the gym. Knowing exactly what was done at the gym last session helps me to improve ensureing I am progressivly overloading my weights.
    </p>
    <p style={{fontSize: (size.width/20)}}>
      This was my first attempt at native android app development using Android Studio. My main goals were to learn as much as possible about app design and development, based on the result of creating a functional application which I use on a day to day basis I think this was a success.
    </p>
  </div>
)

const TeaTimeDescription = ({size}) => (
  <div className="backContent" style={{margin: size.width/15}}>
      <h4 style={{fontSize: (size.width/11), marginTop: 0}}>
      Tea Time
    </h4>
    <div className="icons">
      <i
        className="fa fa-github"
        style={{fontSize: (size.width/7)}}
        onClick={()=>window.open("https://github.com/DD-NZ/TeaTime", '_blank')}
      />
    </div>
    <p style={{fontSize: (size.width/20), marginTop: 0}}>
      The Tea Time project is an android app and arduino microcontroller which notifies my phone when my cup of tea is at my desired temperature.
    </p>
    <p style={{fontSize: (size.width/20)}}>
      The android app syncs up via bluetooth with a microcontroller which contatains a thermometer. When the thermometer reads the desired temperature the app is notified which sends a notification to the home screen.
    </p>
    <p style={{fontSize: (size.width/20)}}>
      The Goals of this project was to learn about Bluetooth Low Energy communication protocols and how to get two devices to talk to one another.
    </p>
  </div>
)

const ThisDescription = ({size}) => (
  <div className="backContent" style={{margin: size.width/15}}>
      <h4 style={{fontSize: (size.width/11), marginTop: 0}}>
      This Website
    </h4>
    <div className="icons">
      <i
        className="fa fa-github"
        style={{fontSize: (size.width/7)}}
        onClick={()=>window.open("https://github.com/DD-NZ/...", '_blank')}
      />
    </div>
    <p style={{fontSize: (size.width/20), marginTop: 0}}>
      I created this Website with React and Sass.
    </p>
    <p style={{fontSize: (size.width/20)}}>
      The Goals of this website was purely around design. I wanted to create somthing contemporary and functional to display, who I am, what I am good and and what I have created. I put alot of work in learning how to make websites responsive and scale to be readable on any screen.
    </p>
    <p style={{fontSize: (size.width/20)}}>
    </p>
  </div>
)

export {WhereMyMoneyDescription, GymTrackerDescription, TeaTimeDescription, ThisDescription};
