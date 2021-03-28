import React from "react";
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Loader from "./Loader";

configure({adapter: new Adapter()})

describe("Loader", () => {
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<Loader/>)
  })

  it("should render Loader component", () => {
    expect(wrapper.exists()).toBe(true)
  });

  it("shouldn't render div element", () => {
    expect(wrapper.find('div').length).toBe(0);
  });

  it("should render div element", () => {
    wrapper.setProps({
        loading:true
    })
    expect(wrapper.find('div').length).toBe(1);
  });

});
