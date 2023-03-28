import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TODOKEY } from '../constants/TODOKEY';

const ListContainer = ({
  title,
  todoList,
  setTodoList,
  isDone,
  setIsVisibleModal,
  setSelectedTodo,
}) => {
  const toggleIsDone = (e) => {
    const tempList = [...todoList];
    tempList.forEach((todo) => {
      if (todo.time == e.target.parentElement.id) {
        todo.isDone = !todo.isDone;
      }
    });
    setTodoList(tempList);

    localStorage.setItem(TODOKEY, JSON.stringify(tempList));
  };

  const handleBtnClick = (e) => {
    setSelectedTodo(e.target.parentElement);
    setIsVisibleModal(true);
  };

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Lists>
        {todoList
          .filter((todo) => todo.isDone === isDone)
          .map((todo) => {
            return (
              <SingleList id={todo.time} key={todo.time}>
                <span onClick={toggleIsDone}>{todo.text}</span>
                <button onClick={handleBtnClick}>🗑</button>
              </SingleList>
            );
          })}
      </Lists>
    </Wrapper>
  );
};

ListContainer.propTypes = {
  title: PropTypes.string,
  todoList: PropTypes.array,
  setTodoList: PropTypes.func,
  isDone: PropTypes.bool,
  setIsVisibleModal: PropTypes.func,
  setSelectedTodo: PropTypes.func,
};

const Wrapper = styled.div`
  height: 33%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  user-select: none;
`;

const Lists = styled.div`
  padding: 0.6rem;
  overflow: auto;
`;

const SingleList = styled.div`
  width: 100%;
  padding: 0.1rem 0;
  display: flex;

  &:hover {
    border-radius: 0.3rem;
    background-color: rgb(239, 239, 248);
  }

  span {
    &:hover {
      cursor: pointer;
    }
  }

  button {
    margin: 0 0 0 auto;
    background-color: transparent;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }
`;

export default ListContainer;
