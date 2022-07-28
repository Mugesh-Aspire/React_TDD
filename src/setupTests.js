// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// import {worker} from './mocks/browser'
import {server} from './mocks/server'

configure({ adapter: new Adapter() }) // Configuration of enzyme at initial

beforeAll(() => server.listen({onUnhandledRequest:'warn'})) // Establish API mocking before all tests.

afterAll(() => server.close()) // Clean up after the tests are finished.

afterEach(() => server.resetHandlers()) // Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
