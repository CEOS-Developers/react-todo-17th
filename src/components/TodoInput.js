import {TodoInputWrapper, TodoInputText, TodoInputButton} from '../styles/todoInputStyle';

function TodoInput() {
  return (
    <TodoInputWrapper>
      <TodoInputText
        type="text"
        id="todo_input"
        placeholder="할 일을 입력해주세요"
        autofocus
      />
      <TodoInputButton type = "submit">+</TodoInputButton>
    </TodoInputWrapper>
  )
}

export default TodoInput;