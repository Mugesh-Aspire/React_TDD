import { shallow } from 'enzyme'

import Login from './Login'

describe('Testing our entire login component', () => {
    const wrapper = shallow(<Login />)

    test('render the login component title', () => {
        expect(wrapper.find('h3').text()).toContain('Login')
    })
    test('check if a login form is initialized',()=>{
        expect(wrapper.find('form')).toHaveLength(1)
    })
    test('check if the username field is intialized',()=>{
        expect(wrapper.find("input").get(0).props.value).toEqual('');
    })
    test('check if the password field is intialized',()=>{
        expect(wrapper.find("input").get(1).props.value).toEqual('');
    })
})