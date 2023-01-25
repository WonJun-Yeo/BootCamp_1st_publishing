import React from 'react';
import './style/common/header.css';
import './style/common/banner.css';
import './style/common/footer.css';
import './style/reset.css';
import './style/freeBoard.css';
import './style/qAndA.css';
import './style/notice.css';

import Header from './common/Header';
import QAndA from './common/qna/QAndA';
import Footer from './common/Footer';
import Banner from './common/Banner';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <QAndA />
      <Footer />
    </div>
  );
}

export default App;
