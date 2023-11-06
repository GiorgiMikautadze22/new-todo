import React from "react";
import styled from "styled-components";
import { SignleTodo } from "./model";

const Todo = styled.div`
  display: flex;
  width: 517px;
  padding: 12px 20px 12px 14px;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background: #fff;

  div {
    display: flex;
    gap: 30px;
    li {
      list-style: none;
      color: #000;
      font-size: 16px;
      font-weight: 400;
      line-height: 25px;
    }
    input {
      width: 19px;
      height: 19px;
      background-color: #eaebed;
      display: flex;
      margin: auto;
    }
    p {
      border-radius: 8px;
      background: rgba(160, 172, 231, 0.1);
      display: flex;
      padding: 4px 8px;
      align-items: flex-start;
      gap: 10px;
    }
    span {
      display: flex;
      margin: auto;
      width: 11px;
      height: 11px;
      border-radius: 4px;
      border: 2px solid var(--red, #ff4949);
    }
  }
`;

interface Props {
  todos: SignleTodo[];
  setTodos: React.Dispatch<React.SetStateAction<SignleTodo[]>>;
}

const TodoList = ({ todos, setTodos }: Props) => {
  const isActive = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              isDone: !todo.isDone,
            }
          : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      {todos.map((todo) => (
        <Todo>
          <div>
            <input type="checkbox" onClick={() => isActive(todo.id)} />
            {todo.isDone ? (
              <li style={{ textDecoration: "line-through" }}>{todo.todo}</li>
            ) : (
              <li>{todo.todo}</li>
            )}
          </div>
          <div>
            <p>Date</p>
            <span onClick={() => handleDelete(todo.id)}></span>
          </div>
        </Todo>
      ))}
    </>
  );
};

export default TodoList;
