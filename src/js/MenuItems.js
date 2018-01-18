import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const MenuItems = () => (
    <div>
        <Menu.Item >
            <NavLink exact activeClassName="active" to="/">DashBoard</NavLink>
        </Menu.Item>
        <Menu.Item >
            <NavLink exact activeClassName="active" to="/createExpense">Create Expense</NavLink>
        </Menu.Item>
        <Menu.Item >
            <NavLink exact activeClassName="active" to="/help">Help</NavLink>
        </Menu.Item>
        <Menu.Item >
            <NavLink exact activeClassName="active" to="/">About</NavLink>
        </Menu.Item>
    </div >
);

export default MenuItems;