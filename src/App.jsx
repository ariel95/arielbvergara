import React from 'react';
import Profile from './components/Profile';
import MenuHamburger from './components/MenuHamburger';
import Information from './components/Information';
import {isMobile} from './helpers/window'

function App() {
  return (
    <div className="App container">
      <div className="content">
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
