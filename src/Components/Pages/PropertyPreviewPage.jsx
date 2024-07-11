import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PropertyPreviewPage = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5173/properties')
      .then(res => setProperties(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="min-h-screen p-8">
      {Array.isArray(properties) && properties.length > 0 ? (
        properties.map(property => (
          <div key={property._id} className="mb-6 bg-white shadow-md rounded p-4">
            <h2 className="text-2xl mb-2">{property.propertyFor}</h2>
            <p>{property.propertyType}</p>
            <p>{property.bedrooms} Bedrooms</p>
            <p>{property.bathrooms} Bathrooms</p>
            <p>{property.address}</p>
            {/* Display other features and amenities */}
          </div>
        ))
      ) : (
        <p>No properties found.</p>
      )}
    </div>
  );
};

export default PropertyPreviewPage;
