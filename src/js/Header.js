import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div>
        <h1>Header</h1>
        <NavLink exact activeClassName="active" to="/">DashBoard</NavLink>
        <NavLink exact activeClassName="active" to="/createExpense">Create Expense</NavLink>
        <NavLink exact activeClassName="active" to="/help">Help</NavLink>
    </div>
);

export default Header;
