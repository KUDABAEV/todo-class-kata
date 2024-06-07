import React from 'react';
import './footer.css';

export default class Footer extends React.Component{

    render() {
        const {todos,changeFilterTodos, onDeleteCompletedTodos, filter} = this.props;
        const countTodosActive = todos.filter(f => f.isDone === false).length;

        return (
            <footer className="footer">
                <span className="todo-count">{countTodosActive} items left</span>
                <ul className="filters">
                    <li>
                        <button
                            className={filter === 'all' ? 'selected' : ''}
                            onClick={() => changeFilterTodos('all')}
                        >All</button>
                    </li>
                    <li>
                        <button
                            className={filter === 'active' ? 'selected' : ''}
                            onClick={() => changeFilterTodos('active')}
                        >Active</button>
                    </li>
                    <li>
                        <button
                            className={filter === 'completed' ? 'selected' : ''}
                            onClick={() => changeFilterTodos('completed')}
                        >Completed</button>
                    </li>
                </ul>
                <button onClick={() => onDeleteCompletedTodos()} className="clear-completed">Clear completed</button>
            </footer>
        );
    }
}
