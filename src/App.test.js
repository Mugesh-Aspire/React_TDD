// import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';

import App, { add, multiply } from './App';
import { fetchUserList } from './sampleApi'


describe('Testing the app component', () => { // describe is the block for the enclosing statements.
  const wrapper = shallow(<App />) // shallow only identifies the direct component elements. Not the childrens
  const addButton = wrapper.find('#add-btn')
  const subtractButton = wrapper.find('#remove-btn')
  beforeEach(() => jest.clearAllMocks()) // Clearing all the mocks.
  
  test('check if app component has a only one classname like App', () => { // performs the test.
    expect(wrapper.find('.App')).toHaveLength(1) // expect is the expected result.
  })
  test('check if a text is available using classname', () => {
    expect(wrapper.find('.App').text()).toContain('Testing react app') // find method finds the dom node using any one of the selector.
  })
  test('check if a add button is available using id', () => {
    expect(addButton.text()).toContain('Add')
  })
  test('check if a subtract button is available using id', () => {
    expect(subtractButton.text()).toContain('Subtract')
  })
  test('check if value is displaying', () => {
    expect(wrapper.find('span').text()).toContain("0")
  })
  test('check is add function is working fine', () => {
    expect(add(2, 3)).toBe(5) // Testing the actual functions with sample values
  })
  test('check if multiply function is working fine', () => {
    expect(multiply(5, 10)).toBe(50) // Testing the actual functions with sample values
  })
  test('render the click event of add button', () => {
    addButton.simulate('click') // Triggering click event manually to check the function is working or not.
    expect(wrapper.find('span').text()).toBe("1")
  })
  test('render the click event of multiply button', () => {
    subtractButton.simulate('click')
    expect(wrapper.find('span').text()).toBe("1")
  })

  // test('Sample api request function', async () => {
  //   const userListData = await fetchUserList()
  //   const sampleData = [
  //     {
  //       id: 1,
  //       email: 'george.bluth@reqres.in',
  //       first_name: 'George',
  //       last_name: 'Bluth',
  //       avatar: 'https://reqres.in/img/faces/1-image.jpg'
  //     },
  //     {
  //       id: 2,
  //       email: 'janet.weaver@reqres.in',
  //       first_name: 'Janet',
  //       last_name: 'Weaver',
  //       avatar: 'https://reqres.in/img/faces/2-image.jpg'
  //     },
  //     {
  //       id: 3,
  //       email: 'emma.wong@reqres.in',
  //       first_name: 'Emma',
  //       last_name: 'Wong',
  //       avatar: 'https://reqres.in/img/faces/3-image.jpg'
  //     },
  //     {
  //       id: 4,
  //       email: 'eve.holt@reqres.in',
  //       first_name: 'Eve',
  //       last_name: 'Holt',
  //       avatar: 'https://reqres.in/img/faces/4-image.jpg'
  //     },
  //     {
  //       id: 5,
  //       email: 'charles.morris@reqres.in',
  //       first_name: 'Charles',
  //       last_name: 'Morris',
  //       avatar: 'https://reqres.in/img/faces/5-image.jpg'
  //     },
  //     {
  //       id: 6,
  //       email: 'tracey.ramos@reqres.in',
  //       first_name: 'Tracey',
  //       last_name: 'Ramos',
  //       avatar: 'https://reqres.in/img/faces/6-image.jpg'
  //     }
  //   ]
  //   expect(userListData.data).toEqual(sampleData)
  // });
})

describe('sample mock api test', () => { // Adding sample api request mocking 
  test('we should have ids as numbers and remaining as string', async () => {
    const resultData = await fetchUserList()
    expect(resultData.data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          avatar: expect.any(String),
          email: expect.any(String),
          first_name: expect.any(String),
          last_name: expect.any(String),
        }),
      ])
    );
  });
})