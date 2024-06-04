import React from 'react';
import './todo-list.css';
import TodoListItem from "../todo-list-item";

export default class TodoList extends React.Component{

    render() {

        return (
            <ul className="todo-list">
                <TodoListItem todos={this.props.todos} />
            </ul>
        )
    }
}