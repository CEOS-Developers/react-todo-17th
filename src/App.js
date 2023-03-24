import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Font } from './styles/font';
import DateBox from './components/DateBox';
import TodayGoal from './components/TodayGoal';
import TodoInput from './components/TodoInput';
import Tasks from './components/Tasks';
function App() {
  const TODO = 0;
  const DONE = 1;
  const [tasks, setTasks] = useState({
    12345678: {
      id: '12345678',
      state: TODO,
      text: 'CEOS 1주차 과제 : JS로 Todo 구현하기',
    },
    12345679: {
      id: '12345679',
      state: TODO,
      text: 'CEOS 2주차 과제 : React로 Todo 구현하기',
    },
  });
  const _saveTasks = (tasks) => {
    setTasks(tasks);
    localStorage.setItem('tasks', tasks);
  };

  const _loadTasks = () => {
    var tasks = JSON.parse(localStorage.getItem('tasks') || `{}`); // 저장된 tasks 정보 불러오기
    // 저장된 tasks가 없을 경우 비어있는 객체 불러올 수 있도록
    setTasks(tasks);
  };
  const _toggleTask = (id) => {
    var newTasks = { ...tasks };

    newTasks[id].state = 1 - newTasks[id].state; // TODO <-> DONE 상태 전환
    console.log(newTasks);
    _saveTasks(newTasks);
  };

  const _deleteTask = (id) => {
    var newTasks = { ...tasks };
    delete newTasks[id]; //id가 key값인 객체 삭제
    _saveTasks(newTasks);
  };
  const _addTask = (text) => {
    if (text.trim() === '') {
      return;
    }
    var newId = Date.now();

    /* 변수의 value값을 JS의 key값으로 사용하는 방법
    https://koonsland.tistory.com/146 */

    _saveTasks({
      ...tasks,
      [newId]: {
        id: [newId],
        state: TODO,
        text: text,
      },
    });
  };
  useEffect(() => {
    //_loadTasks();
  }, []);

  console.log(tasks);
  return (
    <Background>
      <MainBox>
        <DateBox />
        <TodayGoal />
        <TodoInput _addTask={_addTask} />
        <Tasks
          tasks={tasks}
          _toggleTask={_toggleTask}
          _deleteTask={_deleteTask}
        />
      </MainBox>
    </Background>
  );
}
const Background = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100vw;
`;

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 5vh 5vw;
  box-shadow: 0px 4px 4px rgba(45, 45, 45, 0.45);
  width: 90vw;
  height: 100vh;

  max-width: 600px;
`;

export default App;
