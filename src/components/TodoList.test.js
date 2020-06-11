import React from "react";
import { mount } from "enzyme";

import TodoList from "./TodoList";

import TodosContext from "../context";

import { findByTestAttr } from "../../test/testUtils";

describe("TodoForm Component", () => {
  const value = {
    state: {
      todos: [
        {
          id: "1",text: "Test one",complete: false
        },
        {
          id: "2",text: "Test two",complete: false
        },
        {
          id: "3",text: "Test three",complete: false
        },
        {
          id: "4",text: "Test four",complete: false
        }
      ]
    },
    dispatch: jest.fn()
  };
  let wrapper;

  afterEach(() => {
    jest.clearAllMocks();
  });
 
  it("Should display initially four List Items.", () => {
    const wrapper = mount(
      <TodosContext.Provider value={value}>
        <TodoList />
      </TodosContext.Provider>
    );
    expect(wrapper.find("li")).toHaveLength(4);
  });

  it("Should call edit button click function", () => {
    const editButtonClick = jest.fn();
    const wrapper = mount(
      <TodosContext.Provider value={value}>
        <TodoList onClick={editButtonClick} />
      </TodosContext.Provider>
    );
    const button = findByTestAttr(wrapper, "edit-button");
    button.at(0).simulate("click");

    expect(editButtonClick).toHaveBeenCalledTimes(0);
  });
  it("Should call delete button click function", () => {
    const deleteButtonClick = jest.fn();
    const wrapper = mount(
      <TodosContext.Provider value={value}>
        <TodoList onClick={deleteButtonClick} />
      </TodosContext.Provider>
    );
    const button = findByTestAttr(wrapper, "delete-button");
    button.at(0).simulate("click");

    expect(deleteButtonClick).toHaveBeenCalledTimes(0);
  });

  it("Double click on Text", () => {
    const toggleTodo = jest.fn();
    const wrapper = mount(
      <TodosContext.Provider value={value}>
        <TodoList onDoubleClick={toggleTodo} />
      </TodosContext.Provider>
    );
    const button = findByTestAttr(wrapper, "todo-text");
    button.at(0).simulate("dblclick");

    expect(toggleTodo).toHaveBeenCalledTimes(0);
  });

  it("Render todos", () => {
    const wrapper = mount(
      <TodosContext.Provider value={value}>
        <TodoList  />
      </TodosContext.Provider>
    );
    const todoText = findByTestAttr(wrapper, "todo-text");
    expect(todoText.at(0).text().length).not.toBe(0);
  });
});
