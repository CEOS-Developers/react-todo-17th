import React from 'react';
import styled from 'styled-components';
import { Font } from '../styles/font';
import CheckIconSrc from '../assets/images/check.svg';
import DeleteIconSrc from '../assets/images/delete.svg';
import UnCheckIconSrc from '../assets/images/uncheck.svg';
export default function Tasks({ tasks, _toggleTask, _deleteTask }) {
  return (
    <TasksLayout>
      <TaskBox>
        <Font fontSize={'var(--font-size-md)'}>TO DO</Font>
        <TaskContent>
          {Object.values(tasks)
            .filter((task) => task.state === 0)
            .map(({ text, id }) => (
              <TaskContentItem fontSize="var(--font-size-sm)">
                <SvgIcon src={UnCheckIconSrc} onClick={() => _toggleTask(id)} />
                {text}
                <SvgIcon src={DeleteIconSrc} onClick={() => _deleteTask(id)} />
              </TaskContentItem>
            ))}
        </TaskContent>
      </TaskBox>

      <TaskBox>
        <Font fontSize={'var(--font-size-md)'}>DONE</Font>
        <TaskContent>
          {' '}
          {Object.values(tasks)
            .filter((task) => task.state === 1)
            .map(({ text, id }) => (
              <Font fontSize="var(--font-size-sm)">
                <SvgIcon
                  src={CheckIconSrc}
                  onClick={() => _toggleTask(id)}
                  width={'var(--font-size-sm)'}
                />

                {text}
                <SvgIcon
                  src={DeleteIconSrc}
                  onClick={() => _deleteTask(id)}
                  width={'var(--font-size-sm)'}
                />
              </Font>
            ))}
        </TaskContent>
      </TaskBox>
    </TasksLayout>
  );
}
const TasksLayout = styled.div`
  display: flex;
  gap: 20px;
  height: 100%;
  width: 100%;

  @media (max-width: 767px) {
    //모바일

    flex-direction: column;
    justify-content: space-between;
  }

  @media (min-width: 1200px) {
    // 데스크탑 일반
    flex-direction: row;

    justify-content: space-between;
  }
`;

const TaskContent = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 3px solid var(--medium-pink);
  width: 100%;
  height: 100%;
  padding: 10px;
  overflow-y: scroll;
  list-style: none;
`;

const TaskContentItem = styled.div`
  display: flex;
  gap: 5px;
`;

const TaskBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (max-width: 767px) {
    //모바일

    height: 50%;
  }

  @media (min-width: 1200px) {
    // 데스크탑 일반
    height: 50vh;
  }
`;

const SvgIcon = styled.img`
  cursor: pointer;
`;
