import styled from 'styled-components';

export const ItemWrapper = styled.li`
    display:flex;
    line-height: 25px;
    cursor : pointer;
    padding:10px;
    &:hover button{
        opacity : 1;
    }
`

export const ItemText = styled.span`
    flex:1;
`

export const ItemButton = styled.button`
    background-color:transparent;
    border : none;
    opacity: 0;
    transition: opacity 0.5s ease;
    cursor : pointer;
`