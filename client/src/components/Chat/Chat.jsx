import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import { Launcher } from 'react-chat-window';

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
  useEffect(async () => {
    const message = {
      author: 'Nutritionist',
      type: 'text',
      data: {
        text: "Welcome to the chat, please leave any questions for a nutritionist and we'll get back to you shortly.",
      },
    };
    axios
      .get('http://localhost:8001/user/chat')
      .then((results) => {
        setMessageList([...results.data, message]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

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
      />
    </Box>
  );
}
