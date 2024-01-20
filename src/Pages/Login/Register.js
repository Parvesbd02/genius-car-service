import React from 'react';
import './Register.css'
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {
    const navigate=useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const navigateLogin =()=>{
        navigate('/login')
    }

    const handleRegister = event =>{
        event.preventdefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password =event.target.password.value; 

        createUserWithEmailAndPassword(email,password);
    }
    return (
        <div className='register-form'>
            <h2 style={{textAlign:'center'}}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="" id="" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="Register" />
                <br />
            </form>
            <p>Already have a account? <Link to='/login' className='text-danger' onClick={navigateLogin}>Please Login</Link></p>

        </div>
    );
};

export default Register;