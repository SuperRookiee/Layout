import React from 'react';
import styled from 'styled-components';

const MovieContainer = styled.section`
    background-color: orange;
`;
const Movie = () => {
    return (
        <MovieContainer>
            영화 목록
        </MovieContainer>
    );
};

export default Movie;