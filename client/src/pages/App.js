import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import '../styles/App.scss'
import AskGpt from './AskGpt';
import SkillsInput from './SkillsInput';
import MoreInputs from './MoreInputs';

export default function App() {
  const [changeThemeButtonStatus, setChangeThemeButtonStatus] = useState(true);

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

        <div className="skills-input-container">
          <SkillsInput
            changeThemeButtonStatus={changeThemeButtonStatus}
          />
        </div>

        <div className="more-inputs-container">
          <MoreInputs />
        </div>
      </div>

      {/* chatbot container */}
      <div className="right-window">
        <AskGpt />
      </div>
    </div>
  );
}
