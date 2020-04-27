import React from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Board from './Board';
import PlayerSide from './PlayerSide';
import Row from './Row';

configure({ adapter: new Adapter() });

describe('<Board/>', () =>{
  let wrapper: ShallowWrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Board />);
  });

  it('should render 2 PlayerSides', () => {
    expect(wrapper.find(PlayerSide)).toHaveLength(2);
  });

  it('should render 8 Rows', () => {
    expect(wrapper.find(Row)).toHaveLength(8);
  });
});
