import React from "react";
import Header from "../header";
import Main from "../main";
import Footer from "../footer";
import './todo-app.css';

export default class TodoApp extends React.Component {

    state = {
        todoList: [
            {id: 1, title: 'Terminator', isDone: false},
            {id: 2, title: 'Spider man', isDone: false},
            {id: 3, title: 'Batman', isDone: false},
            {id: 4, title: 'Kiss Ass', isDone: false},
        ]
    }

    render() {
        return (
            <section className="todoapp">
                <Header/>
                <Main todos={this.state.todoList}/>
                <Footer/>
            </section>
        );
    }
}
