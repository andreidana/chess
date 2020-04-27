import React from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Margin from './Margin';

configure({ adapter: new Adapter() });

describe('<Margin/>', () =>{
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Margin/>);
  });

  it('should render div with message Margin', () => {
    expect(wrapper.find('div').text()).toBe('Margin');
  });
});
