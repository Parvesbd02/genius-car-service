import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef =useRef('');
    const navigate = useNavigate();

    
    const handleSubmit = e =>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password =passwordRef.current.value;

        console.log(email,password)
    }

    const navigateRegister=e=>{
        navigate('/register')
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-5'>PLEASE LOGIN</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check  type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>New to genius Car? <Link to='/register' className='text-danger' onClick={navigateRegister}>Please Register</Link></p>
        </div>
    );
};

export default Login;