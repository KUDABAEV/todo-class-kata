import React from 'react';
import TodoList from '../todo-list';
import './main.css';
import * as Proptypes from 'prop-types';

export default class Main extends React.Component {
	static defaultProps = {
		inputChangeEditLabel: 'add todo',
		onChangeEditInput: () => {},
		onEditTodo: () => {},
		todos: [],
		onDeleteTodo: () => {},
		onChangeDone: () => {},
	};
	static propTypes = {
		inputChangeEditLabel: Proptypes.string.isRequired,
		onChangeEditInput: Proptypes.func,
		onEditTodo: Proptypes.func,
		todos: Proptypes.arrayOf(Proptypes.object).isRequired,
		onDeleteTodo: Proptypes.func,
		onChangeDone: Proptypes.func,
	};

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
		);
	}
}
