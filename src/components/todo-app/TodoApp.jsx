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
            {id: 4, title: 'Kick Ass', isDone: false},
        ]
    }

    onDeleteTodo = (id) => {
        this.setState((state) =>{
            const todoDelete = state.todoList.filter(item => item.id !== id);
            return {
                ...state.todoList,
                todoList: todoDelete,
            }
        })
    }

    onChangeDone = (id) => {
        this.setState(({todoList}) => {
            const idx = todoList.findIndex((el) => el.id === id);

            const currentItem = todoList[idx];
            const changeItemDone = {...currentItem, isDone: !currentItem.isDone};

            const changeArr = [
                ...todoList.slice(0, idx),
                changeItemDone,
                ...todoList.slice(idx + 1)
            ];
            return {
                todoList: changeArr,
            }
        })
    }

    render() {
        return (
            <section className="todoapp">
                <Header/>
                <Main
                    todos={this.state.todoList}
                    onDeleteTodo={this.onDeleteTodo}
                    onChangeDone={this.onChangeDone}
                />
                <Footer/>
            </section>
        );
    }
}
