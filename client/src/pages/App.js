import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark, faCircleHalfStroke
} from '@fortawesome/free-solid-svg-icons';
import '../styles/App.scss'
import AskGpt from './AskGpt';
import { searchInArray } from '../utils'

export default function App() {
  const skillsData = [
    "Computer Science", "Electrical Engineering", "Mathematics", "Robotics", "Software Development",
    "Artificial Intelligence", "Machine Learning", "Industrial Design", "Physics", "Data Analysis",
    "Systems Engineering", "Project Management", "Information Technology", "Automated Manufacturing"
  ];
  const [skills, setSkills] = useState(skillsData);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [changeThemeButtonStatus, setChangeThemeButtonStatus] = useState(true);
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
    <div
      className="app"
      style={{
        backgroundColor: changeThemeButtonStatus ? "" : "#27282c"
      }}
    >
      {/* skills/resume input section */}
      <div className="left-window">

        <nav>
          <h1>Career Counsellor</h1>
          <FontAwesomeIcon
            className="icon"
            icon={faCircleHalfStroke}
            onClick={() => setChangeThemeButtonStatus(!changeThemeButtonStatus)}
            style={{
              color: changeThemeButtonStatus ? "" : "white"
            }}
          />
        </nav>


        <div className="input-container">
          <p
            style={{
              color: changeThemeButtonStatus ? "" : "white"
            }}
          >Select Your Skills</p>

          <div
            className="skills-input-container"
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
                    color: 'rgba(0, 0, 0, 0.25',
                    cursor: 'not-allowed'
                  } : null}
                  onClick={() => handleSelectSkill(skill)}
                  disabled={isSkillSelected(skill)}
                >{skill}</button>
              ))
            )}
          </div>
        </div>
      </div>

      {/* chatbot container */}
      <div className="right-window">
        <AskGpt />
      </div>
    </div>
  );
}
