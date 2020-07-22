import React from 'react';
import Profile from './components/Profile';
import MenuHamburger from './components/MenuHamburger';
import Information from './components/Information';
import {isMobile} from './helpers/window'
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App container">
      <div className="content">
        <Portfolio />
        <Profile />
        <Information />
      </div>
      {
        isMobile() && <MenuHamburger />
      }
    </div>
  );
}

export default App;
