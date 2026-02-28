import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './AdminLogin.css';
import {Login} from '../models/AuthDto.js';
import {LoginUser} from '../services/AuthService.js';
import {useDispatch} from 'react-redux';
import {JwtActions} from '../store/slices/JwtSlice.js';
import {AuthActions} from '../store/slices/AuthSlice.js';

export function AdminLogin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errors, setErrors] = React.useState({});

    const validate = () => {
        const errs = {};
        if (!email) errs.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(email)) errs.email = 'Invalid email address';
        if (!password) errs.password = 'Password is required';
        return errs;
    };

    async function handleSubmit (e){
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) {
            setErrors(errs);
            return;
        }

        setErrors({});
        try {
            const userLoginDto = new Login(email,password);
            const result = await LoginUser(userLoginDto);
            if (result.status)
            {
                dispatch(JwtActions.saveJwtToken({ jwtToken : result.jwtToken }));
                dispatch(AuthActions.saveUserAuthDetails({username:email}));
                navigate('/Home/AdminStudentDetails');
            }
            else {
                setErrors({ form: result.message || 'Invalid credentials' });
            }
        } catch (error) {
            setErrors({ form: error?.message || 'Unable to login. Please try again.' });
        }
};

    const handleClear = () => {
        setEmail('');
        setPassword('');
        setErrors({});
    };

    return (
        <div className="admin-login">
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
                                aria-invalid={errors.password ? 'true' : 'false'}
                            />
                            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                        </div>
                        {errors.form && <span className="invalid-feedback admin-login-form-error">{errors.form}</span>}
                        <div className="d-flex justify-content-between admin-login-actions">
                            <button type="submit" className="btn btn-primary">Login</button>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={handleClear}
                            >Clear</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}