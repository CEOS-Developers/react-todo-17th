import React, { useState } from 'react';
import styled from 'styled-components';
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
    <>
      <Title>TO-DO LIST</Title>
      <AddTodo onAdd={onAdd} />
      <Filter filters={filters} onChangeFilter={onChangeFilter} todos={todos} />
      <TodoList
        onDelete={onDelete}
        onUpdate={onUpdate}
        filteredTodos={filteredTodos}
      />
      <ClearBtn onClick={() => setTodos([])}>CLEAR ALL</ClearBtn>
    </>
  );
}

const Title = styled.h1`
  text-align: center;
  margin: 0;
  margin-top: 1rem;
`;

const ClearBtn = styled.button`
  align-self: center;

  width: 7.5rem;
  height: 2rem;
  border-radius: 1rem;
  font-size: 0.9rem;

  transition: all 150ms ease-out;

  &:hover {
    background-color: #514e4b23;
  }
`;

export default App;
