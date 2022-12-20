import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = ({name, path}) => {
    return (
        <NavLink to={path}>{name}</NavLink>
    );
};

export default Menu;