import {Outlet, useLocation} from 'react-router-dom';
import { Header } from '../components/Header.jsx';
import { Footer } from '../components/Footer.jsx';
import React from 'react';
import {useDispatch} from 'react-redux';
import {AuthActions} from '../store/slices/AuthSlice.js';
import {JwtActions} from '../store/slices/JwtSlice.js';

export function RootLayout()
{
    const location = useLocation();
    const dispatch = useDispatch();
    const previousPathRef = React.useRef(location.pathname);

    React.useEffect(() => {
        const previousPath = previousPathRef.current;
        const isAdminStudentDetails = location.pathname === '/Home/AdminStudentDetails';

        if (previousPath === '/Home/AdminStudentDetails' && !isAdminStudentDetails) {
            dispatch(AuthActions.clearUserAuthDetails());
            dispatch(JwtActions.clearJwtToken());
        }

        previousPathRef.current = location.pathname;
    }, [location.pathname, dispatch]);

    React.useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    const hideChrome = location.pathname.endsWith('/AdminLogin')
        || location.pathname.endsWith('/AdminStudentDetails');

    return (
        <>
            {!hideChrome && <Header />}
            <Outlet />
            {!hideChrome && <Footer />}
        </>
    );
}