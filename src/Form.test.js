import React from 'react';
import Form from './Form.js';
import {shallow, mount} from 'enzyme';


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
    const wrapper = mount(<Form/>);
    wrapper.find('.input-name').simulate('change',{target:{value: 'G'}});
    wrapper.find('.input-mail').simulate('change',{target:{value: 'g@g.com'}});
    expect(wrapper.state('inputName')).toBe('G');
    expect(wrapper.state('inputMail')).toBe('g@g.com');
});