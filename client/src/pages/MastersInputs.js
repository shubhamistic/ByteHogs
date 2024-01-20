import React from 'react';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';
import '../styles/MastersInputs.scss'
import { CustomInput } from '../components'


export default function MastersInputs(props) {
  const {
    changeThemeButtonStatus,
    GREScore, setGREScore,
    TOEFLScore, setTOEFLScore,
    universityRating, setUniversityRating,
    SOPScore , setSOPScore,
    LORScore, setLORScore,
    CGPA , setCGPA,
    isResearchDone , setIsResearchDone
  } = props;

  return (
    <div
      className="masters-inputs"
      style={{
        backgroundColor: changeThemeButtonStatus ? "" : "rgba(255, 255, 255, 0.025)"
      }}
    >
      <CustomInput
        type="number"
        value={GREScore}
        onChange={(event) => setGREScore(event.target.value)}
        placeholder="Enter GRE score (Optional)"
        icon={faKeyboard}
        changeThemeButtonStatus={changeThemeButtonStatus}
      />

      <CustomInput
        type="number"
        value={TOEFLScore}
        onChange={(event) => setTOEFLScore(event.target.value)}
        placeholder="Enter TOEFL score (Optional)"
        icon={faKeyboard}
        changeThemeButtonStatus={changeThemeButtonStatus}
      />

      <CustomInput
        type="number"
        value={universityRating}
        onChange={(event) => setUniversityRating(event.target.value)}
        placeholder="Enter university rating (Optional)"
        icon={faKeyboard}
        changeThemeButtonStatus={changeThemeButtonStatus}
      />

      <CustomInput
        type="number"
        value={SOPScore}
        onChange={(event) => setSOPScore(event.target.value)}
        placeholder="Enter SOP score (Optional)"
        icon={faKeyboard}
        changeThemeButtonStatus={changeThemeButtonStatus}
      />

      <CustomInput
        type="number"
        value={LORScore}
        onChange={(event) => setLORScore(event.target.value)}
        placeholder="Enter LOR score (Optional)"
        icon={faKeyboard}
        changeThemeButtonStatus={changeThemeButtonStatus}
      />

      <CustomInput
        type="number"
        value={CGPA}
        onChange={(event) => setCGPA(event.target.value)}
        placeholder="Enter CGPA (Optional)"
        icon={faKeyboard}
        changeThemeButtonStatus={changeThemeButtonStatus}
      />

      <div className="research-toggle-input-container">
        <p
          className="text"
          style={{
            color: changeThemeButtonStatus ? "" : "rgba(255, 255, 255, 0.5)"
          }}
        >Have you done any research before 🤔?</p>
        <button
          style={{
            backgroundColor: isResearchDone
              ? "tomato"
              : changeThemeButtonStatus ? "" : "rgba(255, 255, 255, 0.25)",
            color: isResearchDone
              ? "white"
              : changeThemeButtonStatus ? "" : "rgba(255, 255, 255, 0.5)"
          }}
          onClick={() => setIsResearchDone(true)}
        >YES</button>
        <button
          style={{
            backgroundColor: !isResearchDone
              ? "tomato"
              : changeThemeButtonStatus ? "" : "rgba(255, 255, 255, 0.25)",
            color: !isResearchDone
              ? "white"
              : changeThemeButtonStatus ? "" : "rgba(255, 255, 255, 0.5)"
          }}
          onClick={() => setIsResearchDone(false)}
        >No</button>
      </div>
    </div>
  );
}
