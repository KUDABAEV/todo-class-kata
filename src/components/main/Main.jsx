import React from 'react';
import TodoList from "../todo-list";
import './main.css';


export default class Main extends React.Component {

    render() {
        return (
            <section className="main">
                <TodoList
                    inputChangeEditLabel={this.props.inputChangeEditLabel}
                    onChangeEditInput={this.props.onChangeEditInput}
                    onEditTodo={this.props.onEditTodo}
                    todos={this.props.todos}
                    onDeleteTodo={this.props.onDeleteTodo}
                    onChangeDone={this.props.onChangeDone}
                />
            </section>
        )
    }
}

