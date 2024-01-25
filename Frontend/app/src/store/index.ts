import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import authReducer from './reducers/auth.reducer';
// import tokenMiddleware from "./tokenMiddleware";

const reducer = combineReducers({
    auth: authReducer
    // add any other slices here
});
const makeStore = () =>
    configureStore({
        reducer,
        devTools: true,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    });

export const wrapper = createWrapper(makeStore);
