import React from 'react';
import Form from './Form.js';
import {shallow, mount} from 'enzyme';
import App from './App.js'

test('renders without crashing, shallow smoke test', () => {
    shallow(<Form />);  // shallow smoke test
});
test('renders without crashing, deep smoke test', () => {
    shallow(<Form />).render();  // deep smoke test
});

test('inputs', () => {
    const wrapper = shallow(<Form/>);

    expect(wrapper.find('input')).toHaveLength(2);
});

test('Form change', () => {
    const wrapper = mount(<App/>);
    wrapper.find('.input-name').simulate('change',{target:{value: 'G'}});
    wrapper.find('.input-mail').simulate('change',{target:{value: 'g@g.com'}});
    expect(wrapper.state('name')).toBe('G');
    expect(wrapper.state('mail')).toBe('g@g.com');
});