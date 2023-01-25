import React from 'react';
import './style/common/header.css';
import './style/common/banner.css';
import './style/common/footer.css';
import './style/reset.css';
import './style/freeBoard.css';
import './style/qAndA.css';
import './style/notice.css';
import './style/faq.css';
import './style/signup.css';

import Header from './common/Header';
import Footer from './common/Footer';
import Banner from './common/Banner';
import Signup from './signup/Signup';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
