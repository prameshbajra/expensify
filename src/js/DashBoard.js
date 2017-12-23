import React from 'react';

const DashBoard = props => (
    <div>
        <h1>DashBoard</h1>
        <h3>{props.match.params.id}</h3>
    </div>
);

export default DashBoard;
