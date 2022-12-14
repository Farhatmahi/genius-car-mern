import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div className='mb-20'>
            <div className="text-center mb-10">
                <p className='text-2xl font-bold text-error'>Services</p>
                <h2 className='text-5xl font-semibold mb-4'>Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour,<br />or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}/>)
                }
            </div>
        </div>
    );
};

export default Services;