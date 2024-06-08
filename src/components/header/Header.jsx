import React from 'react';
import './header.css';

export default class Header extends React.Component{

    static defaultProps = {
        inputChangeLabel: 'edit todo',
        addTodo: () => {},
        onChangeInput: () => {},
    }

    state = {
        error: null,
    }

    changeError = (message) => {
        this.setState(({error}) => {
            const newError = message;
            return {
                ...error,
                error: newError,
            }
        })
    }

    render() {
        const {onChangeInput, addTodo, inputChangeLabel} = this.props;
        const {error} = this.state;
        const addTodoClick = () => {
            if (inputChangeLabel.trim() !== '') {
                addTodo(inputChangeLabel)
                onChangeInput('')
            }else {
                this.changeError('ww')
            }
        }
        const onKeyPressHandler = (e) => {
            this.changeError(null)
            if (e.charCode === 13) {
                addTodoClick();
            }
        }
        let classError = 'new-todo';
        if (error) {
            classError += ' error-border'
        }
        return (
            <header className="header">
                <h1>todos</h1>
                <input
                    value={inputChangeLabel}
                    onKeyPress={onKeyPressHandler}
                    onChange={(e) => onChangeInput(e.currentTarget.value)}
                    className={classError}
                    type="text"
                    placeholder="What needs to be done?"
                    autoFocus/>
                {error && <div className="error">Поле не должно быть пустым</div>}
            </header>
        )
    }
}