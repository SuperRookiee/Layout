import React from 'react';
import { NavLink } from 'react-router-dom';
import nav from '../../asset/scss/Navbar.module.scss';

const Menu = ({name, path}) => {
    return (
        <NavLink to={path} className={nav.menu}>
            {name}
        </NavLink>
    );
};

export default Menu;