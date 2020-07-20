import React from 'react';
import Profile from './components/Profile';
import MenuHamburger from './components/MenuHamburger';
import Information from './components/Information';


function App() {
  return (
    <div className="App container">
      <Profile />
      <Information />
      <MenuHamburger />
    </div>
  );
}

export default App;
