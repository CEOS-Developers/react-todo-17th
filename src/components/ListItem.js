import {ItemWrapper, ItemText, ItemButton} from '../styles/style.listItem';

function ListItem({todoList, setTodoList, item}){
    const {id,value,isDone, ...rest} = item;
    const toggleItem = id => {
      setTodoList(
        todoList.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)
      );
    }
    const deleteItem = id => {
      setTodoList(
        todoList.filter(item => item.id !== id)
      );
    }
    return (
      <ItemWrapper>
        <ItemText onClick={() => toggleItem(id)}>{value}</ItemText>
        <ItemButton onClick = {() => deleteItem(id)}>🗑</ItemButton>
      </ItemWrapper>
    )
}

export default ListItem;