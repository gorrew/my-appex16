import React from 'react';
import Button from './Button.js';
import {shallow, mount} from 'enzyme';


test('renders without crashing, shallow smoke test', () => {
    shallow(<Button />);  // shallow smoke test
});
test('renders without crashing, deep smoke test', () => {
    shallow(<Button />).render();  // deep smoke test
});

test('btn with className ButtonClass', () => {
    let wrapper = shallow(<Button/>);
    expect(wrapper.find('.buttonClass').hasClass('buttonClass')).toBe(true);
});

test('Btn onClick, empty inputs', () => {
    const wrapper = mount(<Button/>);
    wrapper.setState({name:'g', mail:'g@g.com'});
    wrapper.find('.buttonClass').simulate('click');
    expect(wrapper.state('name')).toBe('');
    expect(wrapper.state('mail')).toBe('');

});