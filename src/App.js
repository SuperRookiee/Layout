import React from 'react';
import { Routes, Route } from 'react-router-dom';
import cm from './asset/scss/common.module.scss';
import Navbar from './common/Navbar.js';
import Main from './page/Main/Main';
import Music from './page/Main/Music';
import Movie from './page/Main/Movie.js';
import Game from './page/Main/Game.js';
import Footer from './common/Footer.js';

const App = () => {
    return (
      <div className={cm.app}>
        <Navbar/>
        <contents>
        <Routes>
          <Route path='/' exact={true} element={<Main/>} />
          <Route path='/Music' element={<Music/>} />
          <Route path='/Movie' element={<Movie/>} />
          <Route path='/Game' element={<Game/>} />
        </Routes>
        <Footer/>
        </contents>
      </div>
    );
};

export default App;