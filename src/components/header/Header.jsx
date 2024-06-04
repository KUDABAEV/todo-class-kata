import React from 'react';
import './header.css';

export default class Header extends React.Component{

    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <input
                    className="new-todo"
                    type="text"
                    placeholder="What needs to be done?"
                    autoFocus/>
            </header>
        )
    }
}