const frontEndSkills = [
  {
    title:"Javascript",
    commercial: true,
    university: true,
    personalProject: true,
    relatedProjects: [
      {
        name: "To-Do List Webservice",
        link:"https://github.com/DD-NZ/Todo-List-Webservice"
      },
      {
        name: "Wheres My Money",
        link:"https://github.com/DD-NZ/BankTracker/tree/master/wheres-my-money"
      }
    ]

  }, {
    title:"React",
    commercial: true,
    university: false,
    personalProject: true,
    relatedProjects: [
      {
        name: "Wheres My Money",
        link:"https://github.com/DD-NZ/BankTracker/tree/master/wheres-my-money"
      }
    ]
  }, {
    title:"Redux",
    commercial: true,
    university: false,
    personalProject: false,
  }, {
    title:"Sass",
    commercial: true,
    university: false,
    personalProject: true,
    relatedProjects: [
      {
        name: "Wheres My Money",
        link:"https://github.com/DD-NZ/BankTracker/tree/master/wheres-my-money"
      }
    ]
  }
]

const backEndSkills = [
  {
    title:"Java / Spring / Maven",
    commercial: true,
    university: true,
    personalProject: false,
    relatedProjects: [
      {
        name: "Log Tracking Webservice",
        link:"https://github.com/DD-NZ/Logging-Server"
      }
    ]
  }, {
    title:"Node / Express",
    commercial: false,
    university: true,
    personalProject: false,
    relatedProjects: [
      {
        name: "To-Do List Webservice",
        link:"https://github.com/DD-NZ/Todo-List-Webservice"
      }
    ]
  }, {
    title:"Postgres",
    commercial: false,
    university: true,
    personalProject: false,
  }, {
    title:"Relational Database Design",
    commercial: false,
    university: true,
    personalProject: false,
    description: "I have taken final year papers on relational database design, learning how to create mathmaticaly correct and optimized databases"
  }
]

const otherSkills = [
  {
    title:"GIT",
    commercial: true,
    university: true,
    personalProject: true,
  }, {
    title:"AWS S3 / EC2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    commercial: true,
    university: true,
    personalProject: true,
    relatedProjects: [
      {
        name: "To-Do List Webservice",
        link:"https://github.com/DD-NZ/Todo-List-Webservice"
      }
    ]
  }, {
    title:"Android App Development",
    commercial: false,
    university: false,
    personalProject: true,
    relatedProjects: [
      {
        name: "Gains Tracker App",
        link:"https://github.com/DD-NZ/GymTracker"
      },
      {
        name: "Tea Time App",
        link: "https://github.com/DD-NZ/TeaTime"
      }
    ]
  }, {
    title:"Machine Learning Techniques",
    commercial: false,
    university: true,
    personalProject: false,
    relatedProjects: [
      {
        name: "Machine Learning Implementations",
        link:"https://github.com/DD-NZ/Machine-Learning"
      }
    ]
  }
]

export {frontEndSkills, backEndSkills, otherSkills};
