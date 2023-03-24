import styled from 'styled-components';

export const ItemWrapper = styled.li`
    display:flex;
    line-height: 25px;
    cursor : pointer;
    padding:10px;
    word-break: break-all;
    border-bottom: 1px solid rgb(121 121 121);
    &:hover button{
        opacity : 1;
    }
    &:before{
        content : ">";
        margin-right:2px;
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