import {createSlice} from '@reduxjs/toolkit';

const AUTH_STORAGE_KEY = 'ktkd_admin_username';
const ADMIN_DETAILS_PATH = '/Home/AdminStudentDetails';

const getInitialUsername = () => {
    if (typeof window === 'undefined') return '';

    if (window.location.pathname !== ADMIN_DETAILS_PATH) {
        window.localStorage.removeItem(AUTH_STORAGE_KEY);
        return '';
    }

    return window.localStorage.getItem(AUTH_STORAGE_KEY) || '';
};

const userAuth = {username:getInitialUsername()};

export const AuthSlice = createSlice({
    name:"authSlice",
    initialState:userAuth,
    reducers:{
        saveUserAuthDetails(state,action)
        {
            state.username=action.payload.username;

            if (typeof window !== 'undefined') {
                const nextUsername = action.payload.username || '';
                if (nextUsername) {
                    window.localStorage.setItem(AUTH_STORAGE_KEY, nextUsername);
                } else {
                    window.localStorage.removeItem(AUTH_STORAGE_KEY);
                }
            }
        },
        clearUserAuthDetails(state)
        {
            state.username = '';
            if (typeof window !== 'undefined') {
                window.localStorage.removeItem(AUTH_STORAGE_KEY);
            }
        }
    }
});

export const AuthActions = AuthSlice.actions;