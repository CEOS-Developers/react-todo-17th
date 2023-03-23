import {TodoListWrapper, Todo, Done, SubTitle, Separator} from '../styles/todoListStyle';

function TodoList() {
  return (
    <TodoListWrapper>
      <Todo>
        <SubTitle>To Do ! : 0</SubTitle>
      </Todo>
      <Separator/>
      <Done>
        <SubTitle>Done ! : 0</SubTitle>
      </Done>
    </TodoListWrapper>
  )
}

export default TodoList;