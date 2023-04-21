import styled from "styled-components";


export const ToDoContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 30px;
    gap: 40px;
`

export const ToDoTitle = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 42px;
    font-family: monospace;
    img{
        height: 80px;
        width: 80px;
        padding-bottom: 10px;
    }
`

export const ToDoForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
`

export const AddToDoContainer = styled.div`
    display: flex;
    align-items: baseline;
    gap: 30px;
`

export const TaskListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style: none;
    gap: 30px;

    li{
        width: 500px;
        background-color: var(--green);
        color: black;
        border-radius: 20px;
        padding: 12px 20px;
        font-size: 26px;
        font-weight: 900;
        font-family: monospace;
        display: flex;
        justify-content: space-between;
        align-items: center;

        img{
            height: 20px;
            cursor: pointer;
        }

        &:nth-child(odd){
            background-color: rgba(255,255,255,0.7);
            color: black;
        }
    }

`

