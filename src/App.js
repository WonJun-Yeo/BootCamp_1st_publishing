import React from 'react';
import './style/common/header.css';
import './style/common/banner.css';
import './style/common/footer.css';
import './style/reset.css';
import './style/freeBoard.css';
import './style/notice.css';

import Header from './common/Header';
import NoticeContainer from './notice/NoticeContainer';
// import FreeboardContainer from './freeboard/FreeboardView';
import Footer from './common/Footer';
import Banner from './common/Banner';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <NoticeContainer />
      {/* <FreeboardContainer /> */}
      <Footer />
    </div>
  );
}

export default App;
