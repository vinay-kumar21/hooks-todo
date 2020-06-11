import React from "react";
import { shallow } from "enzyme";
import App from "./App";

import { findByTestAttr } from "../test/testUtils";


const setUp = () => {
  const wrapper = shallow(<App />);
  return wrapper;
};

describe('App Component',()=>{

    it("App render without any error", () => {
      const wrapper = setUp();
        const appComponent = findByTestAttr(wrapper, "app-component");
        expect(appComponent.length).toBe(1);
      });
})