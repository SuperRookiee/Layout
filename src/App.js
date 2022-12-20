import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Navbar from './common/Navbar.js';
import MenuLink from './component/menuLink'
import Main from './page/Main/Main';
import Art from './page/Main/Art.js';
import Footer from './common/Footer.js';
import Header from './common/Header';

const Contents = styled.div`
  position: absolute;
  padding: 50px;
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
        <MenuLink to="/">Main</MenuLink>
        <MenuLink to="/art">ART</MenuLink>
        <Routes>
          <Route path='/' exact={true} element={<Main/>} />
          <Route path='/art' exact={true} element={<Art/>} />
        </Routes>
        {/* <Footer/> */}
      </Contents>
    </>
  );
};

export default App;