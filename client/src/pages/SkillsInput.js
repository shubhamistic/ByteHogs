import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import '../styles/SkillsInput.scss'
import { searchInArray } from '../utils'

export default function SkillsInput(props) {
  const { changeThemeButtonStatus } = props;
  const skillsData = [
    "Computer Science", "Electrical Engineering", "Mathematics", "Robotics", "Software Development",
    "Artificial Intelligence", "Machine Learning", "Industrial Design", "Physics", "Data Analysis",
    "Systems Engineering", "Project Management", "Information Technology", "Automated Manufacturing"
  ];
  const [skills, setSkills] = useState(skillsData);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const inputContainerRef = useRef(null);

  const handleFocus = ()  => {
    setIsInputFocused(true);
    if (inputContainerRef.current) {
      inputContainerRef.current.focus();
    }
  }

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
      <p
        style={{
          color: changeThemeButtonStatus ? "" : "white"
        }}
      >Select Your Skills</p>

      <div
        className="inner-container"
        style={{
          borderColor: changeThemeButtonStatus ?
            (isInputFocused ? "tomato" : "" ) :
            (isInputFocused ? "tomato" : "white")
        }}
        onFocus={handleFocus}
        tabIndex="0"
      >
        {selectedSkills.map((skill, index) => (
          <div
            key={`selected-skill-${index}`}
            className="selected-skill"
            style={{
              color: changeThemeButtonStatus ? "rgba(0, 0, 0, 0.5)" : "white",
              borderColor: changeThemeButtonStatus ? "" : "white"
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
        {isInputFocused && (
          skills.map((skill, index) => (
            <button
              key={`skill-button-${index}`}
              className="skill-button"
              style={isSkillSelected(skill) ? {
                color: changeThemeButtonStatus ? 'rgba(0, 0, 0, 0.25)' : "rgba(255, 255, 255, 0.25)",
                borderColor: changeThemeButtonStatus? "" : "rgba(255, 255, 255, 0.5)",
                cursor: 'not-allowed'
              } : {
                color: changeThemeButtonStatus ? "" : "white",
                borderColor: changeThemeButtonStatus? "" : "rgba(255, 255, 255, 0.5)"
              }}
              onClick={() => handleSelectSkill(skill)}
              disabled={isSkillSelected(skill)}
            >{skill}</button>
          ))
        )}
      </div>
    </div>
  );
}
