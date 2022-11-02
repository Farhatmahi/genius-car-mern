import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const ServiceCard = ({service}) => {
    const {img, price, title} = service
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} className="w-full h-[250px]" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-between items-center">
        <p className="text-error text-2xl font-semibold">Price : ${price}</p>
          <button className="btn btn-ghost">
          <FontAwesomeIcon className='text-error' icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
