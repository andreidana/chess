import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import Board from './chess-board/Board';

configure({ adapter: new Adapter() });

describe('<App/>', () =>{
  it('should render the Board component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Board)).toHaveLength(1);
  });
});
