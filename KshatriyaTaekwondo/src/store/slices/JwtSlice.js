import {createSlice} from '@reduxjs/toolkit';

const JWT_STORAGE_KEY = 'ktkd_admin_jwt';
const ADMIN_DETAILS_PATH = '/Home/AdminStudentDetails';

const getInitialToken = () => {
    if (typeof window === 'undefined') return '';

    if (window.location.pathname !== ADMIN_DETAILS_PATH) {
        window.localStorage.removeItem(JWT_STORAGE_KEY);
        return '';
    }

    return window.localStorage.getItem(JWT_STORAGE_KEY) || '';
};

const jwtObject = { jwtToken : getInitialToken() }

export const JwtSlice = createSlice({
    name:"jwtSlice1",
    initialState:jwtObject,
    reducers:{
        saveJwtToken(state,action)
        {
            state.jwtToken = action.payload.jwtToken

            if (typeof window !== 'undefined') {
                const nextToken = action.payload.jwtToken || '';
                if (nextToken) {
                    window.localStorage.setItem(JWT_STORAGE_KEY, nextToken);
                } else {
                    window.localStorage.removeItem(JWT_STORAGE_KEY);
                }
            }
        },
        clearJwtToken(state)
        {
            state.jwtToken = '';
            if (typeof window !== 'undefined') {
                window.localStorage.removeItem(JWT_STORAGE_KEY);
            }
        }
    }
})

export const JwtActions = JwtSlice.actions;