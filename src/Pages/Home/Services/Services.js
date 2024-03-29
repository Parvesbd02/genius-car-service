import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services,setServices]=useState([])

    useEffect(()=>{
        fetch('services.json')
        .then((response)=> response.json())
        .then(data => setServices(data))
    },[])
    return (
        <div id='services' className='services mt-5'>
            <h2>Our Services</h2>
           <div className="services-container">
           {
                services.map(service=> <Service key={service.id}
                service={service}
                >

                </Service> )
            }
           </div>
        </div>
    );
};

export default Services;