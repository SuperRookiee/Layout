import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './common/Navbar.js';
import Home from './page/Main/Home';
import Footer from './common/Footer.js';
import Header from './common/Header';
import styled from 'styled-components';

const Contents = styled.div`
  position: absolute;
`;

const App = () => {
  const [state, setSnb] = React.useState(true)

  const getData = () => {
    setSnb(!state);
  }

  return (
    <>
      <Header getData={getData}/>

      <Navbar open={state}/>

      <Contents>
        <Routes>
          <Route path='/' exact={true} element={<Home/>} />
        </Routes>
        <Footer/>
      </Contents>
    </>
  );
};

export default App;