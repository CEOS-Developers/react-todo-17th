import PropTypes from 'prop-types';

const ListContainer = ({ title, todoList, setTodoList, isDone }) => {
  const toggleIsDone = (e) => {
    const tempList = [...todoList];
    tempList.forEach((todo) => {
      if (todo.time === e.target.parentElement.id) {
        todo.isDone = !todo.isDone;
      }
    });
    setTodoList(tempList);
    // @TODO - localStorage 연결
  };

  const removeTodo = (e) => {
    setTodoList(
      todoList.filter((todo) => todo.time !== e.target.parentElement.id)
    );
    // @TODO - localStorage 연결
  };

  return (
    <section className="section-todo">
      <span className="list-title">{title}</span>
      <div className="list-container">
        {todoList
          .filter((todo) => todo.isDone === isDone)
          .map((todo) => {
            return (
              <div id={todo.time} key={todo.time}>
                <span onClick={toggleIsDone}>{todo.text}</span>
                <button onClick={removeTodo}>🗑</button>
              </div>
            );
          })}
      </div>
    </section>
  );
};

ListContainer.propTypes = {
  title: PropTypes.string,
  todoList: PropTypes.array,
  setTodoList: PropTypes.func,
  isDone: PropTypes.bool,
};

export default ListContainer;
