import React from 'react';
import './todo-list-item.css';

export default class TodoListItem extends React.Component{

    render() {
        const {id, title, isDone, onDeleteTodo, onChangeDone} = this.props;

        let completed = '';

        if (isDone) {
            completed += ' completed';
        }

        return (
            <li  className={completed}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={isDone}
                        onChange={() => onChangeDone(id)} />
                    <label>
                        <span onClick={() => onChangeDone(id)}  className="description">{title}</span>
                        <span className="created">created 17 seconds ago</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button
                        className="icon icon-destroy"
                        onClick={(e) => {
                            e.stopPropagation();
                            onDeleteTodo(id)
                        }}
                    ></button>
                </div>
            </li>
        )
    }
}
