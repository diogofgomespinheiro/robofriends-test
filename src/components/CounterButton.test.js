import React from "react";
import { shallow } from "enzyme";
import CounterButton from "./CounterButton";

describe("<CounterButton />", () => {
  let wrapper;

  beforeEach(() => {
    const mockColor = "red";
    wrapper = shallow(<CounterButton color={mockColor}/>);
  });

  it("should render CounterButton component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should correctly increments the counter", () => {
    wrapper.find("button").simulate("click");
    expect(wrapper.state()).toEqual({ count: 1 });
    expect(wrapper.props().color).toEqual("red");
  })

  it("should return true or false on shouldComponentUpdate", () => {
    let shouldUpdate = wrapper.instance().shouldComponentUpdate({ color: "red" }, { count: 1 });
    expect(shouldUpdate).toBe(true);
    shouldUpdate = wrapper.instance().shouldComponentUpdate({ color: "red" }, { count: 0 });
    expect(shouldUpdate).toBe(false);
  });
});
