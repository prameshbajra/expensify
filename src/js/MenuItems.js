import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const MenuItems = () => (
    <div>
        <Menu.Item name="home">
            <NavLink exact activeClassName="active" to="/">DashBoard</NavLink>
        </Menu.Item>
        <Menu.Item name="gamepad">
            <NavLink exact activeClassName="active" to="/createExpense">Create Expense</NavLink>
        </Menu.Item>
        <Menu.Item name="camera">
            <NavLink exact activeClassName="active" to="/help">Help</NavLink>
        </Menu.Item>
    </div>
);

export default MenuItems;
