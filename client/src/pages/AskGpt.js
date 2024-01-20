import React, { useEffect, useRef, useState } from 'react';
import '../styles/AskGpt.scss'
import { askGpt as requestAskGpt } from '../api';

export default function AskGpt(props) {
  const {
    changeThemeButtonStatus
  } = props;

  const [inputValue, setInputValue] = useState('');
  const [chatSummary, setChatSummary] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatContainer = useRef(null);

  useEffect(() => {
    if (chatContainer.current) {
      chatContainer.current.scrollTop = chatContainer.current.scrollHeight;
    }
  }, [chatSummary]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleEnterPress = async (e) => {
    if (e.key === 'Enter') {
      let newChatSummary = [...chatSummary];
      newChatSummary.push({
        origin: 'self',
        text: inputValue
      });
      setChatSummary(newChatSummary);

      setIsLoading(true);
      setInputValue('');

      if (inputValue) {
        const response = await requestAskGpt(inputValue);
        if (response.success) {
          newChatSummary.push({
            origin: 'server',
            text: response.data.reply
          });
          setChatSummary(newChatSummary);
        }
      }
      setIsLoading(false);
    }
  };

  return (
    <div className="ask-gpt">
      <div
        ref={chatContainer}
        className="chat-window-container"
      >
        {chatSummary.map((chatDetails, index) => (
          <p
            key={`chat-${index}`}
            className={chatDetails.origin}
            style={{
              backgroundColor: changeThemeButtonStatus ? "" : "#27282c",
              color: changeThemeButtonStatus ? "" : "white"
            }}
          >{chatDetails.text}</p>
        ))}

        {isLoading && (
          <p className="server">
            <div className="loader"></div>
          </p>
        )}
      </div>

      <div
        className="chat-input-container"
        style={{
          borderColor: changeThemeButtonStatus ? "" : "rgba(0, 0, 0, 0.5)"
        }}
      >
        <input
          style={{
            borderColor: changeThemeButtonStatus ? "" : "rgba(0, 0, 0, 0.5)",
            color: changeThemeButtonStatus ? "" : "rgba(0, 0, 0, 0.5)"
          }}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleEnterPress}
          placeholder="Type Your Question Here"
          disabled={isLoading}
        />
      </div>
    </div>
  );
}
