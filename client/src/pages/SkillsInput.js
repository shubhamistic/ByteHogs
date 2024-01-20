import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import '../styles/SkillsInput.scss'
import { searchInArray, skillSetData } from '../utils'

export default function SkillsInput(props) {
  const { changeThemeButtonStatus } = props;
  const skillsData = skillSetData;
  const [skills, setSkills] = useState(skillsData);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const inputContainerRef = useRef(null);

  const handleSelectSkill = (selectedSkill) => {
    let newSelectedSkills = [...selectedSkills];
    newSelectedSkills.push(selectedSkill);
    setSelectedSkills(newSelectedSkills);
  }

  const removeSelectedSkill = (selectedSkillIndex) => {
    let newSelectedSkills = [...selectedSkills];
    newSelectedSkills.splice(selectedSkillIndex, 1);
    setSelectedSkills(newSelectedSkills);
  }

  const isSkillSelected = (skill) => {
    for (let i = 0 ; i < selectedSkills.length ; i++) {
      if (skill === selectedSkills[i]) {return true;}
    }
    return false;
  }

  const handleSearchInputValueChange = (event) => {
    let newSkills = event.target.value
      ? searchInArray([...skillsData], event.target.value)
      : setSkills(skillsData);
    if (newSkills) {setSkills(newSkills);}
  }

  return (
    <div className="skills-input">
      <div
        className="inner-container"
        tabIndex="0"
      >
        {selectedSkills.map((skill, index) => (
          <div
            key={`selected-skill-${index}`}
            className="selected-skill"
            style={{
              color: changeThemeButtonStatus ? "" : "rgba(255, 255, 255, 0.5)",
              borderColor: changeThemeButtonStatus ? "" : "rgba(255, 255, 255, 0.5)"
            }}
            onClick={() => removeSelectedSkill(index)}
          >
            <p>{skill}</p>
            <FontAwesomeIcon className="icon" icon={faXmark} />
          </div>
        ))}

        <input
          ref={inputContainerRef}
          className="selected-skill selected-skill-input"
          style={{
            color: changeThemeButtonStatus ? "" : "white"
          }}
          onChange={handleSearchInputValueChange}
        />
      </div>

      <div className="skills-list-container">
        {skills.map((skill, index) => (
          <button
            key={`skill-button-${index}`}
            className="skill-button"
            style={isSkillSelected(skill) ? {
              color: changeThemeButtonStatus ? 'rgba(0, 0, 0, 0.25)' : "rgba(255, 255, 255, 0.25)",
              borderColor: changeThemeButtonStatus? "" : "rgba(255, 255, 255, 0.1)",
              backgroundColor: changeThemeButtonStatus? "" : "rgba(255, 255, 255, 0.1)",
              cursor: 'not-allowed'
            } : {
              color: changeThemeButtonStatus ? "" : "rgba(255, 255, 255, 0.75)",
              borderColor: changeThemeButtonStatus? "" : "rgba(255, 255, 255, 0.1)",
              backgroundColor: changeThemeButtonStatus? "" : "rgba(255, 255, 255, 0.1)"
            }}
            onClick={() => handleSelectSkill(skill)}
            disabled={isSkillSelected(skill)}
          >{skill}</button>
        ))}
      </div>
    </div>
  );
}
