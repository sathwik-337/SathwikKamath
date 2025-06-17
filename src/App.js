import React from 'react';

import MainPage from './Pages/MainPage';
import SideBar from './Pages/Sidebar' // Your main content
import Footer from './Pages/Footer';

const App = () => {
  return (
    <div className="">
     
      <SideBar/>
      <div className='pt-20'>
  
        <MainPage />
        <Footer />
        </div>
      </div>
    
  );
};

export default App;
