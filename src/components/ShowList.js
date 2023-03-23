import {ListWrapper, Todo, Done, SubTitle, Separator, TodoList, DoneList} from '../styles/style.showList';
import ListItem from './ListItem';

function ShowList({todoList, setTodoList}) {
  const filteredTodoList = todoList.filter((item) => item.isDone === false);
  const filteredDoneList = todoList.filter((item) => item.isDone === true);
  return (
    <ListWrapper>
      <Todo>
        <SubTitle>To Do ! : 0</SubTitle>
        <TodoList>
          <ListItem
            todoList = {todoList}
            setTodoList = {setTodoList}
            List = {filteredTodoList}
          />
        </TodoList>
      </Todo>
      <Separator/>
      <Done>
        <SubTitle>Done ! : 0</SubTitle>
        <DoneList>
          <ListItem
            todoList = {todoList}
            setTodoList = {setTodoList}
            List = {filteredDoneList}
          />
        </DoneList>
      </Done>
    </ListWrapper>
  )
}

export default ShowList;