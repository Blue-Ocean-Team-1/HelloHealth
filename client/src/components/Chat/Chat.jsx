import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import { Launcher } from 'react-chat-window';
import useAuth from '../../context/AuthContext.jsx';
import config from '../../config/config';

export default function Chat() {
  const [messageList, setMessageList] = useState([]);
  const [newMessage, setNewMessage] = useState({});
  const { currentUser } = useAuth();

  function onMessageWasSent(message) {
    setMessageList([...messageList, message]);
    const params = {
      message,
      user_id: currentUser.uid,
    };
    axios
      .post(`${config.SERVER_URL}/user/chat`, params)
      .then((results) => {
        // HERE .log(`Chat message successful: ${results}`);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(async () => {
    const introMessage = {
      author: 'Nutritionist',
      type: 'text',
      data: {
        text: "Welcome to the chat, please leave any questions for a nutritionist and we'll get back to you shortly.",
      },
    };
    const dbMessages = [];
    if (Object.keys(currentUser).length > 0) {
      axios
        .get(`${config.SERVER_URL}/user/chat?id=${currentUser.uid}`)
        .then((results) => {
          results.data.forEach((entry) => {
            const message = JSON.parse(entry.message);
            const response = JSON.parse(entry.response);
            dbMessages.push(message);
            if (response) dbMessages.push(response);
          });
          setMessageList([introMessage, ...dbMessages]);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [currentUser]);

  return (
    <Box
      sx={{
        'div.sc-launcher': {
          zIndex: 100,
          backgroundColor: '#E76F51',
        },
        'div.sc-header': { background: '#E76F51' },
        '.sc-message--content.sent .sc-message--text': {
          backgroundColor: '#264653 !important',
        },
      }}
    >
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
