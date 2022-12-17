import React from "react";
import styled from 'styled-components';
import Menu from './component/Menu';
import blank_profile from '../asset/img/blank_profile.png';
import nav from '../asset/scss/Navbar.module.scss';

const NavbarContainer = styled.nav`
    flex-direction: column;
    align-items: center;
    width: 200px;
    display: flex;
    height: 100vh;

    section {
        border-bottom: 1px solid black;
    }
`;

const Logo = styled.section`
    width: 100%;
    height: 50px;
    font-weight: bold;
    font-size: 50px;
    padding: 10px 0;
    text-align: center;
`;

const ProfileContainer = styled.section`
    width: 100%;
    height: 70px;
`;

const MenuContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: x-large;
    padding: 30px 0;
`;

const Info = styled.section`
    width: 100%;
`;

const menu = [
    { name: "Main", path: "/" },
    { name: "Music", path: "/music" },
    { name: "Movie", path: "/Movie" },
    { name: "Game", path: "/game"}
];

const Navbar = () => {

    return (
        <NavbarContainer>
            <Logo>Rookie</Logo>
            <ProfileContainer>
                <img src={blank_profile} className={nav.profile} alt={blank_profile}/>
                HyunWook.Go
            </ProfileContainer>
            <MenuContainer>
                {menu.map((menu, i) => {
                    return ( <Menu name={menu.name} path={menu.path}/> );
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