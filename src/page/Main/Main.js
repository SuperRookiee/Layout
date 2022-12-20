import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from "react-router-dom";

const HomeContainer = styled.section`
`;

const index = () => {
    return (
        <HomeContainer>
            <h2>Main Page</h2>
        </HomeContainer>
    );
};

export default index;