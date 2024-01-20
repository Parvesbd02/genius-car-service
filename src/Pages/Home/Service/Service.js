import React from 'react';
import './Service.css'
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {id,name,img,price}=service;
    const navigate = useNavigate();
    
    const navigateToServiceDetail = id =>{
        navigate(`/services/${id}`)
    }
    return (
        <div className='service'>
            <img  src={img} alt="Service"/>
            <h1> {name}</h1>
            <p>Price: ${price}</p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary'>Book Service {name}</button>
        </div>
    );
};

export default Service;