import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import '../styles/App.scss'


export default function App() {
  const skills = [
    "Computer Science", "Electrical Engineering", "Mathematics", "Robotics", "Software Development",
    "Artificial Intelligence", "Machine Learning", "Industrial Design", "Physics", "Data Analysis",
    "Systems Engineering", "Project Management", "Information Technology", "Automated Manufacturing"
  ];
  const [selectedSkills, setSelectedSkills] = useState([]);

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

  return (
    <div className="app">
      <h1>Career Counsellor</h1>


      {/* skills/resume input section */}
      <div className="left-window">
        <div className="input-container">
          <p>Select Your Skills</p>

          <div className="skills-input-container">
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
          </div>

          <div className="skills-list-container">
            {skills.map((skill, index) => (
              <button
                key={`skill-button-${index}`}
                className="skill-button"
                style={isSkillSelected(skill) ? {
                  backgroundColor: 'rgba(0, 0, 0, 0.1',
                  color: 'rgba(0, 0, 0, 0.5',
                  cursor: 'not-allowed'
                } : null}
                onClick={() => handleSelectSkill(skill)}
                disabled={isSkillSelected(skill)}
              >{skill}</button>
            ))}
          </div>
        </div>
      </div>

      {/* chatbot container */}
      <div className="right-window"></div>
    </div>
  );
}
