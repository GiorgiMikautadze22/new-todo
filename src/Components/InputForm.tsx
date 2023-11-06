import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  display: flex;
  width: 517px;
  height: 48px;
  padding: 14px 20px 14px 14px;
  align-items: center;
  gap: 38px;
  border-radius: 12px;
  background: #e5e5e7;
  outline: none;
  border: none;
  color: #939393;
  font-size: 16px;
  font-weight: 400;
`;

interface Props {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}

const InputForm = ({ input, setInput, handleSubmit }: Props) => {
  return (
    <form onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        placeholder="Create new task"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
    </form>
  );
};

export default InputForm;
