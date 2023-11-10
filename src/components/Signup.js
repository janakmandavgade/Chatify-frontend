import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://127.0.0.1:5001/signup/', { email, password });
            console.log(res.data);
            navigate('/login')
        } catch (err) {
            console.error(err);
            if (err.response && err.response.status === 400) {
                setError('Email and password are required!'); 
            }
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form">
                <h2>Signup</h2>
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Signup</button>
                <a href="http://localhost:3000/login/" >Else Login?</a>
            </form>
        </div>
    );
}

export default Signup;
