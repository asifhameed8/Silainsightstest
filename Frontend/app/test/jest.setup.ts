// import 'isomorphic-unfetch';
// import nock from 'nock';
// import dotenv from 'dotenv';
// import httpAdapter from 'axios/lib/adapters/http';
// import axios from 'axios';
// import '@testing-library/jest-dom/extend-expect';

// dotenv.config({ path: '.env.test' });

// axios.defaults.adapter = httpAdapter;

// afterAll(() => {
//     nock.cleanAll();
//     nock.restore();
// });

// window.matchMedia = jest.fn().mockImplementation((query) => {
//     return {
//         matches: false,
//         media: query,
//         onchange: null,
//         addListener: jest.fn(),
//         removeListener: jest.fn()
//     };
// });

// window.scroll = jest.fn();
// window.alert = jest.fn();
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { configure } from '@testing-library/react';

// Configure React Testing Library to automatically cleanup after each test
configure({ testIdAttribute: 'data-testid' });
