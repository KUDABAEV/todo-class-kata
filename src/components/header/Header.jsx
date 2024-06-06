import React from 'react';
import './header.css';

export default class Header extends React.Component{

    render() {
        const {onChangeInput, addTodo, inputChangeLabel} = this.props;
        const addTodoClick = () => {
            if (inputChangeLabel.trim() !== '') {
                addTodo(inputChangeLabel)
            }
        }
        const onKeyPressHandler = (e) => {
            if (e.charCode === 13) {
                addTodoClick();
            }
        }
        return (
            <header className="header">
                <h1>todos</h1>
                <input
                    value={inputChangeLabel}
                    onKeyPress={onKeyPressHandler}
                    onChange={onChangeInput}
                    className="new-todo"
                    type="text"
                    placeholder="What needs to be done?"
                    autoFocus/>
            </header>
        )
    }
}