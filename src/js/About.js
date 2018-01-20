import React from 'react';
import { Header, List } from 'semantic-ui-react';

const About = () => (
    <div>
        <Header color="grey">About</Header>
        <p>
            So, some of your friends/ relatives owe you some money? <br />
            If yes, then you are not alone. This happens to every one of us.
            We lend people some money and later forget to take it back. This app
            takes information about your money and even keeps a date including
            some handy notes to remember later. Now all you have to do is remember
            to open this app and all your money details/ expenditure are available
            right on your screen.
        </p>
        <Header color="grey">Developer</Header>
        <List>
            <List.Item icon="users" content="Pramesh Bajracharya" />
            <List.Item icon="marker" content="Kathmandu, Nepal" />
            <List.Item icon="mail" content={<a href="mailto:pe.messh@gmail.com">pe.messh@gmail.com</a>} />
            <List.Item icon="linkify" content={<a href="http://bajracharya.me">My website and blogs.</a>} />
        </List>
    </div>
);

export default About;
