import React from 'react';
import styled from 'styled-components';
import '../asset/scss/header.scss'

const HeaderContainer = styled.header`
    height: 50px;
`;

const Switch = styled.div`
    width: 50px;
    height: 50px;
    cursor: pointer;
`;

const Header = ({getData}) => {
    const [state, setState] = React.useState(true);

    const navState = () => {
        setState(!state);
        getData(state);
    }
    
    return (
        <HeaderContainer>
            <Switch className={`switch`} onClick={navState}>
                <div className={ `${state ? "top switched" : " top"}` }></div>
                <div className={ `${state ? "bottom switched" : "bottom"}` }></div>
            </Switch>
        </HeaderContainer>
    );
};

export default Header;