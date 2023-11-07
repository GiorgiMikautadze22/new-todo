import React, { useState } from "react";
import { Container } from "./Components/Style/Container";
import { ThemeProvider } from "styled-components/dist/base";
import "./App.css";
import InputForm from "./Components/InputForm";
import GlobalStyles from "./Components/Style/GlobalStyles";
import { SignleTodo } from "./Components/model";
import TodoList from "./Components/TodoList";
import dayjs from "dayjs";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<SignleTodo[]>([]);

  const random: string =
    "#" + Math.floor(Math.random() * 0xffffff).toString(16);

  const today = new Date().toLocaleString();

  const handleSubmit = (e: React.FormEvent) => {
    const trimedInput = input.trim();
    e.preventDefault();
    if (trimedInput !== "") {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          todo: trimedInput,
          isDone: false,
          color: random,
          date: dayjs(today).format("DD MMM"),
        },
      ]);
      setInput("");
    }
    console.log(todos);
  };

  return (
    <>
      <GlobalStyles />
      <Container>
        <InputForm
          input={input}
          setInput={setInput}
          handleSubmit={handleSubmit}
        />

        <TodoList todos={todos} setTodos={setTodos} />
      </Container>
    </>
  );
}

export default App;
