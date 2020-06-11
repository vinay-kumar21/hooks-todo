import React, { useReducer, useContext } from "react";

import TodosContext from "./context";
import todosReducer from "./reducer";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const initialState = useContext(TodosContext);
  const [state, dispatch] = useReducer(todosReducer, initialState);

  return (
    <div data-test="app-component">
      <TodosContext.Provider value={{ state, dispatch }}>
        <TodoForm />
        <TodoList />
      </TodosContext.Provider>
    </div>
  );
}

export default App;