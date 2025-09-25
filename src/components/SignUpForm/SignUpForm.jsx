import { useContext, useState } from 'react'
import { useNavigate } from 'react-router'

import { signUp } from '../../services/authService';
import { UserContext } from '../../contexts/UserContext';   // // Import the UserContext object from the UserContext component file

const SignUpForm = () => {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);    // Destructure the object returned by the useContext() hook to get the setUser() function
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        passwordConf: '',
    });

    const { username, password, passwordConf } = formData;

    const handleChange = (event) => {
        setMessage('');
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
        const newUser = await signUp(formData);
        console.log(newUser);
        setUser(newUser);
        navigate('/');
         } catch (err) {
            setMessage(err.message);
        }
    };

    const isFormInvalid = () => {
        return !(username && password && password === passwordConf);
    }

    return (
        <main>
            <h1>Sign Up</h1>
            <p>{message}</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='username'>Username:</label>
                    <input 
                        type='text'
                        id='name'
                        value={username}
                        name='username'
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor='password'>Password:</label>
                    <input 
                        type='password'
                        id='password'
                        value={password}
                        name='password'
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor='confirm'>Confirm Password:</label>
                    <input 
                        type='password'
                        id='confirm'
                        value={passwordConf}
                        name='passwordConf'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <button disabled={isFormInvalid()}>Sign Up</button>
                    <button onClick={() => navigate('/')}>Calcel</button>
                </div>
            </form>
        </main>
    );
}

export default SignUpForm;