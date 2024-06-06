import React from "react";
import Header from "../header";
import Main from "../main";
import Footer from "../footer";
import {v1} from "uuid";
import './todo-app.css';

export default class TodoApp extends React.Component {

    state = {
        todoList: [
            {id: v1(), title: 'Terminator', isDone: false},
            {id: v1(), title: 'Spider man', isDone: false},
            {id: v1(), title: 'Batman', isDone: false},
            {id: v1(), title: 'Kick Ass', isDone: false},
        ],
        inputText: '',
    }

    onChangeInput = (e) => {
        this.setState({
            inputText: e.currentTarget.value,
        })
    }

    addTodo = (text) => {
        this.setState(({todoList}) => {
            const newTodo = {id: v1(), title:text, isDone: false};
            const newTodoList = [
                newTodo,
                ...todoList,
            ]
            return {
                todoList: newTodoList,
            }
        })
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
                <Header
                    addTodo={this.addTodo}
                    inputChangeLabel={this.state.inputText}
                    onChangeInput={this.onChangeInput}
                />
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
