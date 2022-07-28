import { shallow } from 'enzyme'
import { loginRequest } from '../sampleApi'

import Login from './Login'

describe('Testing our entire login component', () => {
    const wrapper = shallow(<Login />)
    const userNameInput = wrapper.find('input').get(0).props.value
    const passWordInput = wrapper.find('input').get(1).props.value

    test('render the login component title', () => {
        expect(wrapper.find('h3').text()).toContain('Login')
    })
    test('check if a login form is initialized', () => {
        expect(wrapper.find('form')).toHaveLength(1)
    })
    test('check if the username field is intialized', () => {
        expect(userNameInput).toEqual('');
    })
    test('check if the password field is intialized', () => {
        expect(passWordInput).toEqual('');
    })
    describe('trying to login the user', () => {
        test('simulating the event to user to login', async () => {
            wrapper.find('input').at(0).simulate('change', { target: { name: 'username', value: 'mugesh' } });
            wrapper.find('input').at(0).simulate('change', { target: { name: 'passwrd', value: 'pass@123' } });
            expect(wrapper.find('.success').text()).toBe('')
            wrapper.find('#login').simulate('click')
            expect(wrapper.find('.success').text()).toBe('User loggedin successfully.')

        })
    })
})

