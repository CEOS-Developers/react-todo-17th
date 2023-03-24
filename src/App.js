import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import Filter from './components/Filter';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  //새로운 todo를 추가
  const onAdd = (newTodo) => setTodos([...todos, newTodo]);
  //삭제 버튼 눌러서 todo를 삭제
  const onDelete = (deletedTodo) =>
    setTodos(todos.filter((t) => t.id !== deletedTodo.id));
  //todo의 text와 status(doing<->done) 수정
  const onUpdate = (updatedTodo) =>
    setTodos(todos.map((t) => (t.id === updatedTodo.id ? updatedTodo : t)));

  //

  const filters = [
    { name: '전체', status: 'all' },
    { name: '진행 중', status: 'doing' },
    { name: '완료', status: 'done' },
  ];

  const [filter, setFilter] = useState('all'); //현재 선택된 필터

  const onChangeFilter = (updatedFilter) => setFilter(updatedFilter);

  //클릭한 필터에 해당하는 아이템 배열을 반환
  let filteredTodos = [];

  if (filter === 'all') {
    filteredTodos = todos;
  } else {
    filteredTodos = todos.filter((todo) => todo.status === filter);
  }

  return (
    <div>
      <h1>TO-DO LIST</h1>
      <AddTodo onAdd={onAdd} />
      <Filter filters={filters} onChangeFilter={onChangeFilter} todos={todos} />
      <TodoList
        onDelete={onDelete}
        onUpdate={onUpdate}
        filteredTodos={filteredTodos}
      />
      <button onClick={() => setTodos([])}>CLEAR ALL</button>
    </div>
  );
}

export default App;
