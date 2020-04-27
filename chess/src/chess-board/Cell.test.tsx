import React from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Cell, { CellProps } from './Cell';

configure({ adapter: new Adapter() });

describe('<Cell/>', () =>{
  let wrapper: ShallowWrapper;
  const props: CellProps = {
      rowIdx: 1,
      cellIdx: 2
  }

  beforeEach(() => {
    wrapper = shallow(<Cell { ...props }/>);
  });

  it('should render div with message Margin', () => {
    expect(wrapper.find('div').text()).toBe('1 - 2');
  });
});
