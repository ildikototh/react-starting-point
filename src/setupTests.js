import 'jest-enzyme';
import 'jest-chain';

const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

require('jest-localstorage-mock');

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

global.fetch = jest.fn(() => Promise.resolve());
global.jest =  require('jest');
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock;
