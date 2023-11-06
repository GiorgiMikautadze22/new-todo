import React, { useState } from "react";
import { Container } from "./Components/Style/Container";
import { ThemeProvider } from "styled-components/dist/base";
import "./App.css";
import InputForm from "./Components/InputForm";
import { GlobalStyles } from "./Components/Style/GlobalStyles";
import { SignleTodo } from "./Components/model";
import TodoList from "./Components/TodoList";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<SignleTodo[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          todo: input,
          isDone: false,
        },
      ]);
      setInput("");
    }
    console.log(todos);
  };

  return (
    <Container>
      <GlobalStyles />
      <InputForm
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
      />

      <TodoList todos={todos} setTodos={setTodos} />
    </Container>
  );
}

export default App;
