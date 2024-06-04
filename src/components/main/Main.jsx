import React from 'react';
import TodoList from "../todo-list";
import './main.css';


export default class Main extends React.Component {

    render() {
        return (
            <section className="main">
                <TodoList todos={this.props.todos}  />
            </section>
        )
    }
}

