import styled from 'styled-components';

export const ListWrapper = styled.div`
    display:flex;
    flex-direction: column;
    width:400px;
    height:500px;
    background-color: rgba( 255, 255, 255, 0.8);
    border-radius: 10px;
`

export const Todo = styled.div`
    flex:1;
    overflow : auto;
    padding:10px;
`

export const Done = styled.div`
    flex:1;
    overflow : auto;
    padding:10px;
`

export const SubTitle = styled.span`
    font-size:25px;
    font-family: 'KCC-Ganpan';
`

export const Separator = styled.hr`
    border: 0;
    padding: 0;
    margin: 10px;
    border-bottom: 2px dashed #4d3d3d;
    background: #999;
`

export const TodoList = styled.ul`
    line-style : none;
`

export const DoneList = styled.ul`
    line-style : none;
`