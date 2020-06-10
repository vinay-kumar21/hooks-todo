import React, { useState, useContext, useEffect } from "react";
import TodosContext from "../context";

export default function Todoform() {
  const [todo, setTodo] = useState("");
  const {
    state: { currentTodo = {} },
    dispatch
  } = useContext(TodosContext);

  useEffect(() => {
    if (currentTodo.text) {
      setTodo(currentTodo.text);
    } else {
      setTodo("");
    }
  }, [currentTodo.id,currentTodo.text]);

  const handleSubmit = event => {
    console.log(currentTodo.id);
    event.preventDefault();
    if (currentTodo.text) {
      dispatch({ type: "UPDATE_TODO", payload: todo });
    } else {
      console.log(currentTodo.text);
      dispatch({ type: "ADD_TODO", payload: todo });
    }
   
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center p-5">
        <h1 className="m-1">Enter your todo:</h1>
      <input
        type="text"
        className="border-black border-solid border-2"
        onChange={event => setTodo(event.target.value)}
        value={todo}
      />
    </form>
  );
}
