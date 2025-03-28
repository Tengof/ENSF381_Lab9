import React from 'react';
import './login.css'
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault();

        const backendEndpoint = 'http://127.0.0.1:5000';

        const username = document.getElementById('username').value
        const password = document.getElementById('password').value

        try {
            const response = await fetch(backendEndpoint,
                {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({'username':username, 'password':password}),
            });

            const data = await response.json();

            if (response.ok) {
                console.log(data['success']);
                navigate('/predict_house_price');
            }
            else {
                console.error('Error during form submission');
            }
        }

        catch (error) {
            console.error('Error during form submission:', error);
            document.getElementById('error').style.display = 'block';
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label>Username:</label>
                <br/>
                <input
                    className='loginField'
                    id='username'
                    name='username'
                    type='text'
                    required
                />
                <br/>
                <label>Password:</label>
                <br/>
                <input
                    className='loginField'
                    id='password'
                    name='password'
                    type='password'
                    required
                />
                <br/>
                <button
                    className='loginButton'
                    type='submit'
                    >Submit
                </button>
            </form>

            <div className='error' id='error'>
                <p>
                    There was an error logging in. Please check username and password.
                </p>
            </div>
        </div>
    );
}

export default Login;