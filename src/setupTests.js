// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import {worker} from './mocks/browser'
import {server} from './mocks/server'


beforeAll(() => server.listen()) // Establish API mocking before all tests.

afterEach(() => server.resetHandlers()) // Reset any request handlers that we may add during the tests,
// so they don't affect other tests.

afterAll(() => server.close()) // Clean up after the tests are finished.