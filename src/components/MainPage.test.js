import React from "react";
import { shallow } from "enzyme";
import MainPage from "./MainPage";

describe("<MainPage />", () => {
  let wrapper;

  beforeEach(() => {
    const mockProps = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: "",
      isPending: false,
    }

    wrapper = shallow(<MainPage {...mockProps}/>)
  });

  it("should render MainPage without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should filter robots correctly", () => {
    expect(wrapper.instance().filterRobots()).toEqual([]);
    wrapper.setProps({ searchField: "J", robots: [{ id:3,name:"John", email:"john@gmail.com"}]});
    const filteredRobots = [{ id:3,name:"John", email:"john@gmail.com"}];
    expect(wrapper.instance().filterRobots()).toEqual(filteredRobots);
  });

  it("should render h1 when pending is true", () => {
    wrapper.setProps({ isPending: true });
    expect(wrapper.find("h1")).toHaveLength(1);
  })
})
