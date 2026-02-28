import {configureStore} from '@reduxjs/toolkit'
import {AuthSlice} from './slices/AuthSlice.js';
import {JwtSlice} from './slices/JwtSlice.js';

export const store = configureStore({
    reducer:{
        auth:AuthSlice.reducer,
        jwt:JwtSlice.reducer
    }
})

