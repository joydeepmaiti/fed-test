import React from "react";
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import ProductDetail from "./ProductDetail";

configure({adapter: new Adapter()})

describe("ProductDetail", () => {
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<ProductDetail/>)
  })

  it("should render ProductDetail component", () => {
    expect(wrapper.exists()).toBe(true)
  });

  it("shouldn't render div element", () => {
    expect(wrapper.find('div').length).toBe(0);
  });

});
