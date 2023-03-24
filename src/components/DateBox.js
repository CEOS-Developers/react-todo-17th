import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Font } from '../styles/font';
export default function DateBox() {
  let days = [
    'SUNDAY',
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY',
  ];

  let months = [
    '',
    'JANUARY',
    'FEBRUARY',
    'MARCH',
    'APRILL',
    'MAY',
    'JUNE',
    'JULY',
    'AUGUST',
    'SEMTEMBER',
    'OCTOBER',
    'NOBEMBER',
    'DESEMBER',
  ];

  const [currentMonthText, setCurrentMonthText] = useState('MARCH');
  const [currentMonth, setCurrentMonth] = useState(0);
  const [currentDate, setCurrentDate] = useState(0);
  const [currentDay, setCurrentDay] = useState('MON');

  useEffect(() => {
    let today = new Date();

    setCurrentMonth(today.getMonth() + 1);
    setCurrentDate(today.getDate());

    let currentDayIdx = today.getDay();
    setCurrentDay(days[currentDayIdx]);
    setCurrentMonthText(months[currentMonth]);
  }, []);
  return (
    <Col>
      <HeadLine fontSize={'var(--font-size-lg)'} color={`var(--pink)`}>
        {currentMonthText}
      </HeadLine>
      <Row>
        <Font fontSize={'var(--font-size-ml)'} color={`var(--gray)`}>
          {currentMonth}.{currentDate}
        </Font>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Font fontSize={'var(--font-size-ml)'} color={`var(--gray)`}>
          {currentDay}
        </Font>
      </Row>
    </Col>
  );
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: 10px;
`;
const HeadLine = styled(Font)`
  letter-spacing: 3px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;
