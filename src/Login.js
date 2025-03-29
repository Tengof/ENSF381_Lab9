import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const backendEndpoint = 'http://127.0.0.1:5000/validate_login';

    async function handleLogin(event) {
        event.preventDefault();

        try {
            const response = await fetch(
                backendEndpoint,
                {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({'username':username, 'password':password}),
                }
            );

            const data = await response.json();

            if (response.ok) {
                console.log(data);
                if (data['success']) {
                    navigate('/predict');
                    setMessage(data['message']);
                    document.getElementById('error').style.backgroundColor = '#3c763d';
                    document.getElementById('error').style.display = 'block';
                }
                else {
                    console.log('Incorrect username or password');
                    setMessage(data['message']);
                    document.getElementById('error').style.display = 'block';
                }
            }
            else {
                console.error('Login failed');
                setMessage(data['message']);
                document.getElementById('error').style.display = 'block';
            }
        }

        catch(error) {
            console.error('Error during login:', error);
            setMessage('Server failed to connect')
            document.getElementById('error').style.display = 'block';
        }
    };

    return (
        <div>
            <form className='login' onSubmit={handleLogin}>
                <h1>Login</h1>
                <label>Username:</label>
                <br/>
                <input
                    className='loginField'
                    id='username'
                    name='username'
                    type='text'
                    required
                    onChange={(e) => setUsername(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br/>
                <button className='loginButton' type='submit'>
                    Submit
                </button>
            </form>

            <div className='error' id='error'>
                <p>
                    {message}
                </p>
            </div>
        </div>
    );
}

export default Login;