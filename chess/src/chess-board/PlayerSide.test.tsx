import React from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PlayerSide from './PlayerSide';

configure({ adapter: new Adapter() });

describe('<PlayerSide />', () =>{
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<PlayerSide/>);
  });

  it('should render div with message Player', () => {
    expect(wrapper.find('div').text()).toBe('Player');
  });
});
