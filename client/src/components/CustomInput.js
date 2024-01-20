import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/components/CustomInput.scss';

export default function CustomInput(props) {
  const {
    changeThemeButtonStatus,
    type, value, onChange, placeholder, required, icon
  } = props

  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputValueOnChange = (event) => {
    const targetValue = event.target.value;
    if (/^(\S+\s?)+\S*$/.test(targetValue) || targetValue === '') {
      onChange(event);
    }
  }

  return (
    <div className="custom-input">
      <div className="label-container">
        <p
          className="label"
          style={{
            animation: value ? 'labelUp forwards' : isInputFocused
              ? 'labelUp 0.2s ease-in-out forwards' : '',
            color: isInputFocused
              ? 'currentcolor' : changeThemeButtonStatus
              ? "" : "rgba(255, 255, 255, 0.5)",
            backgroundColor: changeThemeButtonStatus ? "" : "#27282c"
          }}
        >{placeholder}</p>
      </div>

      <div
        className="custom-input-container"
        style={{
          borderColor: isInputFocused
            ? 'currentcolor' : changeThemeButtonStatus
            ? "" : "rgba(255, 255, 255, 0.5)",
          backgroundColor: changeThemeButtonStatus ? "" : "#27282c"
        }}
      >
        <div className="icon-container">
          <FontAwesomeIcon
            style={{
              color: changeThemeButtonStatus ? "" : "rgba(255, 255, 255, 0.5)"
            }}
            className="icon"
            icon={icon}
          />
        </div>

        <input
          style={{
            color: changeThemeButtonStatus ? "" : "rgba(255, 255, 255, 0.75)"
          }}
          type={type}
          value={value}
          onChange={handleInputValueOnChange}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          required={required}
        />
      </div>
    </div>
  );
}
