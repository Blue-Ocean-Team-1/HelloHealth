import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import { Launcher } from 'react-chat-window';
import Container from '@mui/material/Container';
import Navigation from './Navigation.jsx';
import ProductsPage from './Pages/ProductsPage.jsx';
import BoxPage from './Pages/BoxPage.jsx';
import FarmsPage from './Pages/FarmsPage.jsx';
import CartPage from './Pages/CartPage.jsx';
import AccountPage from './Pages/AccountPage.jsx';
import LoginPage from './Pages/LoginPage/LoginPage.jsx';
import ProductViewPage from './Pages/ProductViewPage.jsx';
// import useAuth from '../context/AuthContext.jsx';
import useMainContext from '../context/MainContext.jsx';
import useAuth from '../context/AuthContext.jsx';
import * as routeConstants from '../config/pageRoutes';
import Footer from './Footer.jsx';

export default function App() {
  const { page } = useMainContext();
  const { currentUser } = useAuth();
  const [messageList, setMessageList] = useState([]);

  function sendMessage(text) {
    if (text.length > 0) {
      setMessageList([
        ...messageList,
        {
          author: 'them',
          type: 'text',
          data: { text },
        },
      ]);
    }
  }
  function onMessageWasSent(message) {
    const reply = {
      author: 'Nutritionist',
      type: 'text',
      data: { text: "We have received your reply, you'll hear back soon." },
    };

    setMessageList([...messageList, message, reply]);
  }
  useEffect(() => {
    const message = {
      author: 'Nutritionist',
      type: 'text',
      data: {
        text: "Welcome to the chat, please leave any questions for a nutritionist and we'll get back to you shortly.",
      },
    };
    setMessageList([...messageList, message]);
  }, []);

  // test endpoint and server connection
  useEffect(() => {
    axios
      .get('http://localhost:8001/hello')
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.error(err));
    if (window.sessionStorage.getItem('cart') === null) {
      window.sessionStorage.setItem('cart', JSON.stringify({}));
    }
  }, []);

  const renderPage = () => (
    <Switch>
      <Route path={routeConstants.HOME} exact>
        <ProductsPage />
      </Route>
      <Route path={routeConstants.BOX}>
        <BoxPage />
      </Route>
      <Route path={routeConstants.FARMS}>
        <FarmsPage />
      </Route>
      <Route path={routeConstants.CART}>
        <CartPage />
      </Route>
      <Route path={routeConstants.ACCOUNT}>
        {currentUser ? <AccountPage /> : <LoginPage />}
      </Route>
      <Route path={`${routeConstants.PRODUCT}`}>
        <ProductViewPage />
      </Route>
    </Switch>
  );

  return (
    <>
      <nav>
        <Navigation />
      </nav>
      <section className="content">{renderPage()}</section>
      <section>
        <Container sx={{ 'div.sc-launcher': { zIndex: 100 } }}>
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
        </Container>
      </section>
      <Footer />
    </>
  );
}
