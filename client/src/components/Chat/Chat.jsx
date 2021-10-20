import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import { Launcher } from 'react-chat-window';
// import getChat from './getChat';

export default function Chat() {
  const [messageList, setMessageList] = useState([]);

  function onMessageWasSent(message) {
    const reply = {
      author: 'Nutritionist',
      type: 'text',
      data: { text: "We have received your reply, you'll hear back soon." },
    };
    setMessageList([...messageList, message]);
  }
  function handleClick() {
    let chatHistory;
    axios
      .get('http://localhost:8001/chat')
      .then((results) => {
        chatHistory = results;
        console.log(results);
      })
      .catch((err) => {
        console.error(err);
      });
    const message = {
      author: 'Nutritionist',
      type: 'text',
      data: {
        text: "Welcome to the chat, please leave any questions for a nutritionist and we'll get back to you shortly.",
      },
    };
    // setMessageList([...chatHistory, message]);
  }

  return (
    <Box sx={{ 'div.sc-launcher': { zIndex: 100 } }}>
      <Launcher
        agentProfile={{
          teamName: 'Chat with a Nutritionist!',
          imageUrl:
            'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
        }}
        onMessageWasSent={onMessageWasSent}
        messageList={messageList}
        showEmoji
        mute
        handleClick={handleClick}
      />
    </Box>
  );
}
