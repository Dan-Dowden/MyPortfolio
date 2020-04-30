import React from 'react';
const Commercial =()=> (
  <div className="bubble commercial">
    Commercial
  </div>
)

const University =()=>(
  <div className="bubble university">
    University
  </div>
)


const PersonalProject =()=>(
  <div className="bubble personalProject">
    Personal Projects
  </div>
)

const SkillContent = ({skill}) => {

  return (
    <div className="skillContent">
      {
        skill.description
        ?(
          <p className="description section">
            {skill.description}
          </p>
        )
        :null
      }
      {
        skill.commercial || skill.university || skill.personalProject
        ? (

          <div className="experience section">
            <h5>Experience</h5>
            <div className="list">
              { skill.commercial ? <Commercial/> : null}
              { skill.university ? <University/> : null}
              { skill.personalProject ? <PersonalProject/> : null}
            </div>
          </div>
        )
        :null
      }
      {
        skill.relatedProjects
        ?(
          <div className="relatedProjects section">
            <h5>Related Projects</h5>
            <div className="list">
            {
              skill.relatedProjects.map(item => (
                <a href={item.link} target="_blank">{item.name}</a>
              ))
            }
            </div>
          </div>
        )
        :null
      }
    </div>
  )
}

export default SkillContent
