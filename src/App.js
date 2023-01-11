import React from 'react';
import './style/common/header.css';
import './style/common/banner.css';
import './style/reset.css';
import './style/freeBoard.css';

import Header from './common/Header';
import FreeboardContainer from './freeboard/FreeboardView';
import Footer from './common/Footer';
import Banner from './common/Banner';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <FreeboardContainer />
      <Footer />
    </div>
  );
}

export default App;
