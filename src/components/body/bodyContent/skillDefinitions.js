const frontEndSkills = [
  {
    title:"Javascript",
    commercial: true,
    university: true,
    personalProject: true,
    relatedProjects: [
      {
        name: "Where's My Money",
        link:"https://github.com/DD-NZ/BankTracker-v2"
      }, {
        name: "This website",
        link:"https://github.com/DD-NZ/myPortfolio"
      },{
        name: "Coffee Shop Webservice",
        link:"https://github.com/DD-NZ/Fake-Coffee-Shop"
      }, {
        name: "To-Do List Webservice",
        link:"https://github.com/DD-NZ/Todo-List-Webservice"
      }
    ]

  }, {
    title:"React",
    commercial: true,
    university: false,
    personalProject: true,
    relatedProjects: [
      {
        name: "Where's My Money",
        link:"https://github.com/DD-NZ/BankTracker-v2"
      }, {
        name: "This website",
        link:"https://github.com/DD-NZ/myPortfolio"
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
        name: "Where's My Money",
        link:"https://github.com/DD-NZ/BankTracker-v2"
      }, {
        name: "This website",
        link:"https://github.com/DD-NZ/myPortfolio"
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
        name: "Coffee Shop Webservice",
        link:"https://github.com/DD-NZ/Fake-Coffee-Shop"
      }, {
        name: "To-Do List Webservice",
        link:"https://github.com/DD-NZ/Todo-List-Webservice"
      }
    ]
  }, {
    title:"Postgres",
    commercial: false,
    university: true,
    personalProject: false,
    relatedProjects: [
      {
        name: "Coffee Shop Webservice",
        link:"https://github.com/DD-NZ/Fake-Coffee-Shop"
      }
    ]
  }, {
    title:"Relational Database Design",
    commercial: false,
    university: true,
    personalProject: false,
    description: "I have taken final year papers on relational database design, learning how to create mathematically correct and optimized databases."
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
    description: "I have used EC2 instances both commercially and at university, the websites I have created were deployed with S3 and Cloudfront.",
    commercial: true,
    university: true,
    personalProject: true,
  }, {
    title:"Android App Development",
    commercial: false,
    university: false,
    personalProject: true,
    relatedProjects: [
      {
        name: "Gym Tracker App",
        link:"https://github.com/DD-NZ/GymTracker"
      },
      {
        name: "Tea Time App",
        link: "https://github.com/DD-NZ/TeaTime"
      }
    ]
  }, {
    title:"Machine Learning Techniques",
    description: "I have taken advanced papers on machine learning, understanding the concepts and mathematics behind the algorithms and how to apply them to datasets.",
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
