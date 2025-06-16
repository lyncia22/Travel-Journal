import React from 'react';
import './TravelJournal.css';

const TravelJournal = ({ title, location, description, image }) => {
  return (
    <div className="travel-card">
      <img src={image} alt={title} />
      <div className="card-text">
        <h2>{title}</h2>
        <p className="location">{location}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TravelJournal; 
