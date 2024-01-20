import React from 'react';

const Footer = () => {
    return (
        <footer className='text-center mt-5'>
            <p>
               Copyright &copy; 2019 - {new Date().getFullYear()}
            </p>
        </footer>
    );
};

export default Footer;