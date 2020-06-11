import React from 'react';
import {mount} from 'enzyme';

import TodoForm from './TodoForm';

import TodosContext from "../context";

import { findByTestAttr } from "../../test/testUtils"; 

describe('TodoForm Component',()=>{
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
let wrapper
      beforeEach(()=>{
        wrapper = mount(
            <TodosContext.Provider value={value}>
              <TodoForm />
            </TodosContext.Provider>
          );

      })

      afterEach(() => {
        jest.clearAllMocks();
      });

    it("render without any error", () => {

        
        const formComponent = findByTestAttr(wrapper, "form-component");
        expect(formComponent.length).toBe(1);
      });

      it("state update on input value change", () => {
          const mockFn=jest.fn();
        const inputBox = findByTestAttr(wrapper, "input-box");
        const mockEvent = { target: { value: "test" } };
        inputBox.simulate("change", mockEvent);
        expect(mockFn).toHaveBeenCalledTimes(0);
      });

      it("Should call handleSubmit function when form is submitted", () => {
        const handleSubmitFn = jest.fn();
        const wrapper = mount(
            <TodosContext.Provider value={value}>
            <TodoForm onSubmit={handleSubmitFn} />
            </TodosContext.Provider>
        );
        const inputBox = findByTestAttr(wrapper, "input-box");
        const mockEvent = { target: { value: "test" } };
        inputBox.simulate("submit", mockEvent);
        expect(handleSubmitFn).toHaveBeenCalledTimes(0);
      });
  
})