import {ItemWrapper, ItemText, ItemCorrectionInput,ItemDeleteButton,ItemCorrectionSubmitButton,ItemCorrectionButton} from '../styles/style.listItem';
import {useState,useEffect,useRef} from 'react';

function ListItem({todoList, setTodoList, item}){
    const {id,value,isDone, ...rest} = item;
    const [edited , setEdited] = useState(false);
    const [newText, setNewTest] = useState(value); // 새로운 아이템 내용
    const editInputRef = useRef(null);
    useEffect(() => {
      // edit 모드일때 포커싱을 한다.
      if (edited) {
        editInputRef.current.focus();
      }
    }, [edited]);
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
    const onClickEditButton = () => {
      setEdited(true);
    };
    const onChangeEditInput = (e) => {
      setNewTest(e.target.value);
    };
    const onClickSubmitButton = () => {
      setTodoList(
        todoList.map((todo) => ({ ...todo,value: todo.id === id ? newText : todo.value,}))
      );
      setEdited(false);
    };
    return (
      <ItemWrapper onSubmit={onClickSubmitButton}>
        {
          edited ? (
            <ItemCorrectionInput 
              type="text"
              value={newText}
              ref={editInputRef}
              onChange={onChangeEditInput}
            />
          ) : <ItemText onClick={() => toggleItem(id)}>{value}</ItemText>
        }
        {
          edited ? (
            <ItemCorrectionSubmitButton type = "submit" onClick={onClickSubmitButton}>✍</ItemCorrectionSubmitButton>
          ) : (
            <ItemCorrectionButton onClick={onClickEditButton}>✏</ItemCorrectionButton>
          )
        }
        <ItemDeleteButton onClick = {() => deleteItem(id)}>🗑</ItemDeleteButton>
      </ItemWrapper>
    )
}

export default ListItem;