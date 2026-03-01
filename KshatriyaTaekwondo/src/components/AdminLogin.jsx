import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './AdminLogin.css';
import {Login} from '../models/AuthDto.js';
import {LoginUser} from '../services/AuthService.js';
import {useDispatch} from 'react-redux';
import {JwtActions} from '../store/slices/JwtSlice.js';
import {AuthActions} from '../store/slices/AuthSlice.js';

export function AdminLogin() {
    const LOGIN_LOADER_DELAY_MS = 1000;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errors, setErrors] = React.useState({});
    const [isSubmittingLogin, setIsSubmittingLogin] = React.useState(false);
    const [loginLoader, setLoginLoader] = React.useState({
        isVisible: false,
        status: 'loading',
        message: 'Signing you in...'
    });

    const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

    const validate = () => {
        const errs = {};
        if (!email) errs.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(email)) errs.email = 'Invalid email address';
        if (!password) errs.password = 'Password is required';
        return errs;
    };

    async function handleSubmit (e){
        e.preventDefault();
        if (isSubmittingLogin) return;

        const errs = validate();
        if (Object.keys(errs).length) {
            setErrors(errs);
            return;
        }

        setErrors({});
        setIsSubmittingLogin(true);
        setLoginLoader({
            isVisible: true,
            status: 'loading',
            message: 'Signing you in...'
        });
        await delay(LOGIN_LOADER_DELAY_MS)
        try {
            const userLoginDto = new Login(email,password);
            const result = await LoginUser(userLoginDto);
            if (result.status)
            {
                // setLoginLoader({
                //     isVisible: true,
                //     status: 'success',
                //     message: 'Loading User configurations..'//result.message || 'Login successful. Redirecting...'
                // });
                // await delay(LOGIN_LOADER_SUCCESS_DELAY_MS);
                dispatch(JwtActions.saveJwtToken({ jwtToken : result.jwtToken }));
                dispatch(AuthActions.saveUserAuthDetails({username:email}));
                navigate('/Home/AdminStudentDetails');
            }
            else {
                const loginErrorMessage = result.message || 'Invalid credentials';
                setErrors({ form: loginErrorMessage });
                // setLoginLoader({
                //     isVisible: true,
                //     status: 'error',
                //     message: loginErrorMessage
                // });
                // await delay(LOGIN_LOADER_ERROR_DELAY_MS);
            }
        } catch (error) {
            const loginErrorMessage = error?.message || 'Unable to login. Please try again.';
            setErrors({ form: loginErrorMessage });
            setLoginLoader({
                isVisible: true,
                status: 'error',
                message: loginErrorMessage
            });
            await delay(LOGIN_LOADER_ERROR_DELAY_MS);
        } finally {
            setLoginLoader((previousState) => ({
                ...previousState,
                isVisible: false
            }));
            setIsSubmittingLogin(false);
        }
};

    const handleClear = () => {
        setEmail('');
        setPassword('');
        setErrors({});
    };

    return (
        <div className="admin-login">
            {loginLoader.isVisible && (
                <div className="admin-loader-overlay" role="status" aria-live="polite" aria-label="Admin login in progress">
                    <div className={`admin-loader-card admin-loader-${loginLoader.status}`}>
                        {loginLoader.status === 'loading' ? (
                            <div className="admin-loader-spinner" aria-hidden="true"></div>
                        ) : (
                            <div className="admin-loader-status-icon" aria-hidden="true">
                                {loginLoader.status === 'success' ? '✓' : '!'}
                            </div>
                        )}
                        <p>{loginLoader.message}</p>
                    </div>
                </div>
            )}
            <div className="logo-bar">
                <Link to="/" className="logo-link" aria-label="Go to home">
                    Go to home
                </Link>
            </div>
            <div className="login-wrap">
                <div className="card admin-card p-4 shadow-sm">
                    <h3 className="text-center mb-4">Administrator Login</h3>
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="form-group mb-3">
                            <label htmlFor="admin-email">Email address</label>
                            <input style={{backgroundColor: "aliceblue"}}
                                id="admin-email"
                                type="email"                                
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                disabled={isSubmittingLogin}
                                aria-invalid={errors.email ? 'true' : 'false'}
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="admin-password">Password</label>
                            <input style={{backgroundColor: "aliceblue"}}
                                id="admin-password"
                                type="password"
                                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                disabled={isSubmittingLogin}
                                aria-invalid={errors.password ? 'true' : 'false'}
                            />
                            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                        </div>
                        {errors.form && <span className="invalid-feedback admin-login-form-error">{errors.form}</span>}
                        <div className="d-flex justify-content-between admin-login-actions">
                            <button type="submit" className="btn btn-primary" disabled={isSubmittingLogin}>
                                {isSubmittingLogin ? 'Signing In...' : 'Login'}
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={handleClear}
                                disabled={isSubmittingLogin}
                            >Clear</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}