import React from 'react';
import { NavLink } from 'react-router-dom';

const Help = () => (
    <div>
        <h1>Help</h1>
        <NavLink to="/dashboard/1">Go one</NavLink>
        <NavLink to="/dashboard/2">Go two</NavLink>
        <NavLink to="/dashboard/3">Go three</NavLink>
    </div >
);

export default Help;
