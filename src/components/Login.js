import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import './Form.css';
import { useNavigate } from 'react-router-dom';


function Login({userID,setUserID}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://127.0.0.1:5001/login/', { email, password });
            console.log("REACHED LOGIN: ",email, password);
            Cookies.set('token', res.data.token);
            Cookies.set('public_id', res.data.public_id);
            // setLoading(false);
            setUserID(res.data.public_id);

            localStorage.setItem('userID', res.data.public_id);
            navigate(`/chat/${res.data.public_id}`);
        } catch (err) {
            console.error(err);
            if (err.response && err.response.status === 401) {
                setError('Wrong password!'); 
            }
            if (err.response && err.response.status === 400) {
                setError('Email and password are required!'); 
            }
            if (err.response && err.response.status === 404) {
                setError('User not found!'); 
            }
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form">
                <h2>Login</h2>
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Login</button>
                <a href="http://localhost:3000/signup/" >Else Signup?</a>
            </form>
        </div>
    );
}

export default Login;
