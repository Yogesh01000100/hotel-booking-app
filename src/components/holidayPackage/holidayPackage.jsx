// HolidayPackages.jsx
import React from 'react';
import './holidayPackage.css';
import beachsideImage from '../../assets/pexels-jiawei-cui-2310835.jpg';
import mountainImage from '../../assets/pexels-jiawei-cui-2310835.jpg';
function HolidayPackages() {
  const packages = [
    { id: 1, title: 'Beachside Escape', details: 'Enjoy a serene beach holiday...', image: beachsideImage },
    { id: 2, title: 'Mountain Adventure', details: 'Explore the mountains with this thrilling package...', image: beachsideImage },
  ];

  return (
    <div className="holiday-packages">
      {packages.map(pkg => (
        <div key={pkg.id} className="package-card">
          <img src={pkg.image} alt={pkg.title} className="package-image" />
          <div className="package-info">
            <h3>{pkg.title}</h3>
            <p>{pkg.details}</p>
            <button className="btn-view">View Details</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HolidayPackages;
