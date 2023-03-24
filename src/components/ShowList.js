import {ListWrapper, Todo, Done, SubTitle, Separator, TodoList, DoneList} from '../styles/style.showList';
import ListItem from './ListItem';

function ShowList({todoList, setTodoList}) {
  const filteredTodoList = todoList ? todoList.filter((item) => item.isDone === false) : [];
  const filteredDoneList = todoList ? todoList.filter((item) => item.isDone === true) : [];
  return (
    <ListWrapper>
      <Todo>
        <SubTitle>To Do ! : {filteredTodoList.length}</SubTitle>
        <TodoList>
          {filteredTodoList.map((todoItem) => (
            <ListItem
            todoList = {todoList}
            setTodoList = {setTodoList}
            item = {todoItem}
            key = {todoItem.id}
          />
          ))}
        </TodoList>
      </Todo>
      <Separator/>
      <Done>
        <SubTitle>Done ! : {filteredDoneList.length}</SubTitle>
        <DoneList>
          {filteredDoneList.map((doneItem) => (
            <ListItem
            todoList = {todoList}
            setTodoList = {setTodoList}
            item = {doneItem}
            key = {doneItem.id}
          />
          ))}
        </DoneList>
      </Done>
    </ListWrapper>
  )
}

export default ShowList;