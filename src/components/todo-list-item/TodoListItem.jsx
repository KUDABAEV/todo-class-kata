import React from 'react';
import './todo-list-item.css';

export default class TodoListItem extends React.Component{

    render() {
        const {todos} = this.props;

        return (
            todos.map(item => {
                return (
                    <li key={item.id} className="completed">
                        <div className="view">
                            <input className="toggle" type="checkbox" />
                            <label>
                                <span className="description">{item.title}</span>
                                <span className="created">created 17 seconds ago</span>
                            </label>
                            <button className="icon icon-edit"></button>
                            <button className="icon icon-destroy"></button>
                        </div>
                    </li>
                )
            })
        )
    }
}
