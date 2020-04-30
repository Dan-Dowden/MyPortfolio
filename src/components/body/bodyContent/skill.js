import React, {useState} from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import SkillContent from './skillContent'

const Skill = ({icon, skills, header}) => {
  const [expanded, setExpanded] = useState(undefined);

  const handleChange = title => (event) => {
    setExpanded(title === expanded ? undefined : title);
  };

  return (
    <div className="box">
      <i className={icon}/>
      <h4>{header}</h4>
      {
        skills.map(item =>(
          <ExpansionPanel
            expanded={expanded===item.title}
            onChange={handleChange(item.title)}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              {item.title}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <SkillContent skill={item}/>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))
      }
    </div>
  )
}

export default Skill
