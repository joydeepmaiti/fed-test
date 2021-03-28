import React from "react";
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from "./App";
import Autocomplete from "./Components/Autocomplete/Autocomplete";
import ProductDetail from "./Components/ProductDetail/ProductDetail";



configure({adapter: new Adapter()})

describe("App", () => {
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<App/>)
  })

  it("should render App component", () => {
    expect(wrapper.exists()).toBe(true)
  });

  it("should render 1 Autocomplete component", () => {
    expect(wrapper.find(Autocomplete)).toHaveLength(1)
  });

  it("should render 1 ProductDetail component", () => {
    expect(wrapper.find(ProductDetail)).toHaveLength(1)
  });

});
