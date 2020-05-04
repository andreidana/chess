import React from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Cell, { CellProps } from './Cell';

configure({ adapter: new Adapter() });

function buildCell(rowIndex: number, cellIndex: number) {
  const props: CellProps = {
    rowIdx: rowIndex,
    cellIdx: cellIndex
  }
  return shallow(<Cell { ...props }/>);
}

describe('<Cell />', () =>{
  let wrapper: ShallowWrapper;

  it('should render div with message Margin', () => {
    wrapper = buildCell(1, 2);

    expect(wrapper.find('div').text()).toBe('1 - 2');
  });

  it('should have background-color white when row is even and column is uneven', () => {
    wrapper = buildCell(2, 5);

    expect(wrapper.find('div').hasClass('cellWhiteColor')).toBe(true);
  });

  it('should have background-color white when row is uneven and column is even', () => {
    wrapper = buildCell(5, 2);

    expect(wrapper.find('div').hasClass('cellWhiteColor')).toBe(true);
  });

  it('should have background-color black when row is even and column is even', () => {
    wrapper = buildCell(2, 2);

    expect(wrapper.find('div').hasClass('cellBlackColor')).toBe(true);
  });

  it('should have background-color black when row is uneven and column is uneven', () => {
    wrapper = buildCell(5, 5);

    expect(wrapper.find('div').hasClass('cellBlackColor')).toBe(true);
  });
});
