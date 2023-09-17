import {
	TodoInputWrapper,
	TodoInputText,
	TodoInputButton,
} from '../styles/style.todoInput';
import { useState } from 'react';

function TodoInput({ todoList, setTodoList }) {
	const [inputValue, setInputValue] = useState('');
	const makeList = (e) => {
		e.preventDefault();
		if (!inputValue.trim()) return;
		const newList = {
			id: Date.now(),
			value: inputValue,
			isDone: false,
		};
		setTodoList([...todoList, newList]);
		setInputValue('');
	};
	const handleOnChangeText = (e) => {
		setInputValue(e.target.value);
	};
	return (
		<TodoInputWrapper onSubmit={makeList}>
			<TodoInputText
				type="text"
				id="todo_input"
				placeholder="할 일을 입력해주세요"
				value={inputValue}
				onChange={handleOnChangeText}
				autoFocus
			/>
			<TodoInputButton type="submit">+</TodoInputButton>
		</TodoInputWrapper>
	);
}

export default TodoInput;
