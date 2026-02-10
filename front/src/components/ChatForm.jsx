import React, { useRef } from 'react'
import { BsChatSquareText } from "react-icons/bs";

const ChatForm = ({ generateChatResponse, chatHistory, setChatHistory }) => {
  const inputRef = useRef();

  

  const handleSubmit = (e) => {
    e.preventDefault();    

    const userMessage = inputRef.current.value.trim(); //앞뒤 공백 제거

    if (!userMessage) return;
    inputRef.current.value = '';

    setChatHistory((history) => [
      ...history,
      {role: 'user', text: userMessage},
    ])

    setTimeout(() => {setChatHistory((history) => [
      ...history,
      {role: 'model', text: <BsChatSquareText />},
    ])
      generateChatResponse([
        ...chatHistory,
        {role: 'user', text: userMessage},
      ]);
    }, 500);
    
    // generateChatResponse([{ role: 'user', text: userMessage }])
  }
  return (
    <form className='chat-form' onSubmit={handleSubmit}>
      <input 
      type='text'
      placeholder='메시지를 입력해 주세요.'
      className='message-input'
      ref={inputRef}
      required
      />
      <button className='material-symbols-rounded'>arrow_upward</button>
    </form>
  )
}

export default ChatForm