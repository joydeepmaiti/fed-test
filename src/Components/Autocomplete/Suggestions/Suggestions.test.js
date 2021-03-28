import React from "react";
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Suggestions from "./Suggestions";


configure({adapter: new Adapter()})

describe("Suggestions", () => {
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<Suggestions/>)
  })

  it("should render Suggestions component", () => {
    expect(wrapper.exists()).toBe(true)
  });

  it("should accept showSuggestions props", () => {
    wrapper = mount(<Suggestions showSuggestions={true} suggestions={[{
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    }]}/>);
    expect(wrapper.props().showSuggestions).toEqual(true);
  });

  it("shouldn't render any ul element", () => {
    wrapper.setProps({
      showSuggestions:true,
      suggestions:[]
    })
    expect(wrapper.find('ul').length).toBe(0);
  });

  it("should render 1 ul element and 1 li element", () => {
    wrapper.setProps({
      showSuggestions:true,
      suggestions:[{
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
      }]
    })
    expect(wrapper.find('ul').length).toBe(1);
    expect(wrapper.find('li').length).toBe(1);
  });

  it("should render 1 ul element and 2 li element", () => {
    wrapper.setProps({
      showSuggestions:true,
      suggestions:[{
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
      },{
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts "
      }]
    })
    expect(wrapper.find('ul').length).toBe(1);
    expect(wrapper.find('li').length).toBe(2);
  });

});
