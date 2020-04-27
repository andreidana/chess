import React from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Row, { RowProps } from './Row';
import Margin from './Margin';
import Cell from './Cell';

configure({ adapter: new Adapter() });

describe('<Row />', () =>{
  let wrapper: ShallowWrapper;
  const props: RowProps = {rowIdx: 2};

  beforeEach(() => {
    wrapper = shallow(<Row {...props}/>);
  });

  it('should render 2 Margins', () => {
    expect(wrapper.find(Margin)).toHaveLength(2);
  });

  it('should render 8 Cells', () => {
    expect(wrapper.find(Cell)).toHaveLength(8);
  });
});
