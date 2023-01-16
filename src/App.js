import React from 'react';
import './style/common/header.css';
import './style/common/banner.css';
import './style/common/login.css';
import './style/reset.css';
import './style/freeBoard.css';
import './style/notice.css';
import './style/qAndA.css';
import './style/signup.css';

import Header from './common/Header';
import NoticeContainer from './notice/NoticeContainer';
import Footer from './common/Footer';
import Banner from './common/Banner';
import QAndAView from './qAndA/QAndAView';
import Signup from './signup/Signup';
import Login from './common/Login';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      {/* <FreeboardContainer /> */}
      {/* <NoticeContainer /> */}
      {/* <QAndAView /> */}
      {/* <Signup /> */}
      <Login />
      <Footer />
    </div>
  );
}

export default App;
