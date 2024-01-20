import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import '../styles/App.scss'
import AskGpt from './AskGpt';
import SkillsInput from './SkillsInput';
import MastersInputs from './MastersInputs';
import JobInput from './JobInput';

export default function App() {
  const [changeThemeButtonStatus, setChangeThemeButtonStatus] = useState(true);
  const [careerOptionType, setCareerOptionType] = useState('masters');
  const [GREScore, setGREScore] = useState('');
  const [TOEFLScore, setTOEFLScore] = useState('');
  const [universityRating, setUniversityRating] = useState('');
  const [SOPScore, setSOPScore] = useState('');
  const [LORScore, setLORScore] = useState('');
  const [CGPA, setCGPA] = useState('');
  const [projectsCount, setProjectsCount] = useState('');
  const [isResearchDone , setIsResearchDone] = useState(false);

  return (
    <div
      className="app"
      style={{
        backgroundColor: changeThemeButtonStatus ? "" : "#27282c"
      }}
    >
      {/* skills/resume input section */}
      <div className="left-window">
        <nav
          style={{
            backgroundColor: changeThemeButtonStatus ? "" : "#27282c",
            boxShadow: changeThemeButtonStatus ? "" : "0 1px 2px rgba(255, 255, 255, 0.25)"
          }}
        >
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
          <p className="heading">Select Your Skills 😃</p>
          <SkillsInput
            changeThemeButtonStatus={changeThemeButtonStatus}
          />
        </div>

        <div className="select-career-option-container">
          <div className="select-career-option">
            <p className="text">
              Do you want to go for Masters or apply for a Job 🤔?
            </p>
            <button
              style={{
                borderColor: careerOptionType === 'masters'
                  ? "tomato"
                  : changeThemeButtonStatus ? "" : "rgba(255, 255, 255, 0.25)",
                color: careerOptionType === 'masters'
                  ? "tomato"
                  : changeThemeButtonStatus ? "" : "rgba(255, 255, 255, 0.5)"
              }}
              onClick={() => setCareerOptionType('masters')}
            >MASTERS</button>
            <button
              style={{
                borderColor: careerOptionType === 'job'
                  ? "tomato"
                  : changeThemeButtonStatus ? "" : "rgba(255, 255, 255, 0.25)",
                color: careerOptionType === 'job'
                  ? "tomato"
                  : changeThemeButtonStatus ? "" : "rgba(255, 255, 255, 0.5)"
              }}
              onClick={() => setCareerOptionType('job')}
            >JOB</button>
          </div>
        </div>

        <div className="more-inputs-container">
          <p className="heading">Tell Us More About You 🙃</p>
          {careerOptionType === 'masters' ? (
            <MastersInputs
              changeThemeButtonStatus={changeThemeButtonStatus}
              GREScore={GREScore}
              setGREScore={setGREScore}
              TOEFLScore={TOEFLScore}
              setTOEFLScore={setTOEFLScore}
              universityRating={universityRating}
              setUniversityRating={setUniversityRating}
              SOPScore={SOPScore}
              setSOPScore={setSOPScore}
              LORScore={LORScore}
              setLORScore={setLORScore}
              CGPA={CGPA}
              setCGPA={setCGPA}
              isResearchDone={isResearchDone}
              setIsResearchDone={setIsResearchDone}
            />
          ) : (
            <JobInput
              changeThemeButtonStatus={changeThemeButtonStatus}
              projectsCount={projectsCount}
              setProjectsCount={setProjectsCount}
              CGPA={CGPA}
              setCGPA={setCGPA}
            />
          )}
        </div>
      </div>

      {/* chatbot container */}
      <div className="right-window">
        <AskGpt
          changeThemeButtonStatus={changeThemeButtonStatus}
        />
      </div>
    </div>
  );
}
