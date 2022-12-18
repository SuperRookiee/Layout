import React from "react";
import styled from 'styled-components';
import Menu from './component/Menu';
import nav from '../asset/scss/Navbar.module.scss'

const NavbarContainer = styled.nav`
    display : ${ props => props.open };
    position: absolute;
    flex-direction: column;
    align-items: center;
    width: 200px;
    height: 100vh;
    z-index: 10;
    background-color: white;
    border: 1px solid black;
`;

const Logo = styled.section`
    width: 100%;
    height: 50px;
    font-weight: bold;
    font-size: 50px;
    padding: 10px 0;
    text-align: center;
`;

const MenuContainer = styled.section`
    width: 100%;
    flex-direction: column;
    font-size: x-large;
    padding: 30px 0;
    display: inline-flex;
`;

const Info = styled.section`
    width: 100%;
`;

const menu = [
    { name: "Home", path: "/" },
    { name: "Info", path: "/info" }
];

const Navbar = (props) => {
    if(props.open === true) {
        var display = 'none';
    }
    else {
        var display = 'block';
    }

    return (
        <NavbarContainer open={display}>
            <Logo>Rookie</Logo>
            <MenuContainer className={nav.menu}>
                {menu.map((menu, i) => {
                    return ( <Menu name={menu.name} path={menu.path} key={i}/> );
                })}
            </MenuContainer>
            <Info className={nav.info}>
                <div>#SuperRookie</div>
                <div>#HyunWook Go</div>
                <div>#Project</div>
            </Info>
        </NavbarContainer>
    );
};

export default Navbar;