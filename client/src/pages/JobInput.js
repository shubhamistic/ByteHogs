import React from 'react';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';
import '../styles/JobInput.scss'
import { CustomInput } from '../components'


export default function JobInput(props) {
  const {
    changeThemeButtonStatus,
    projectsCount, setProjectsCount,
    CGPA , setCGPA
  } = props;

  return (
    <div
      className="job-inputs"
      style={{
        backgroundColor: changeThemeButtonStatus ? "" : "rgba(255, 255, 255, 0.025)"
      }}
    >
      <CustomInput
        type="number"
        value={projectsCount}
        onChange={(event) => setProjectsCount(event.target.value)}
        placeholder="Enter GRE score (Optional)"
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
    </div>
  );
}
