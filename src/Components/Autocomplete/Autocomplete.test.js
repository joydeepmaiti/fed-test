import React from "react";
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Autocomplete from "./Autocomplete";
import Suggestions from './Suggestions/Suggestions'
import Loader from '../Loader/Loader'


configure({adapter: new Adapter()})

describe("Autocomplete", () => {
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<Autocomplete/>)
  })

  it("should render Autocomplete component", () => {
    expect(wrapper.exists()).toBe(true)
  });

  it("should render 1 Suggestion component", () => {
    expect(wrapper.find(Suggestions)).toHaveLength(1)
  });

  it("should render 1 Loader component", () => {
    expect(wrapper.find(Loader)).toHaveLength(1)
  });

  it("should render 1 input element", () => {
    expect(wrapper.find('input[type="text"]')).toHaveLength(1)
  });

  it('should set the password value on change event with trim', () => {
    wrapper.find('input[type="text"]').simulate('change', {
      target: {
        value: 'mens',
      },
    });
    expect(wrapper.find('input[type="text"]').prop('value')).toEqual(
      'mens',
    );
  });

});
