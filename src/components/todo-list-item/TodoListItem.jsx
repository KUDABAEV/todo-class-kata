import React from 'react';
import './todo-list-item.css';

export default class TodoListItem extends React.Component {

    state = {
        editMode: false,
    }
    changeEditMode = () => {
        this.setState(({editMode}) => {
            return {
                editMode: !editMode,
            }
        })
    }

    render() {
        const {editMode} = this.state;
        const {
            id,
            title,
            created,
            isDone,
            onDeleteTodo,
            onChangeDone,
            onEditTodo,
            inputChangeEditLabel,
            onChangeEditInput,
        } = this.props;

        const onKeyPressHandler = (e) => {
            if (e.charCode === 13) {
                if (inputChangeEditLabel !== '') {
                    onEditTodo(id, inputChangeEditLabel)
                    this.changeEditMode()
                    onChangeEditInput('')
                }
            }
        }

        let completed = '';

        if (isDone) {
            completed += ' completed';
        }

        return (
            <div>
                {
                    editMode
                        ? <input className="edit-input"
                                 value={inputChangeEditLabel}
                                 type="text"
                                 placeholder="Edit"
                                 onChange={(e) => onChangeEditInput(e.currentTarget.value)}
                                 onKeyPress={onKeyPressHandler}
                        />
                        : <li className={completed}>
                            <div className="view">
                                <input
                                    className="toggle"
                                    type="checkbox"
                                    checked={isDone}
                                    onChange={() => onChangeDone(id)}/>
                                <label>
                                    <span onClick={() => onChangeDone(id)} className="description">{title}</span>
                                    <span className="created">data</span>
                                </label>
                                <button
                                    className="icon icon-edit"
                                    onClick={() => this.changeEditMode()}
                                ></button>
                                <button
                                    className="icon icon-destroy"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onDeleteTodo(id)
                                    }}
                                ></button>
                            </div>
                        </li>
                }
            </div>
        )
    }
}
