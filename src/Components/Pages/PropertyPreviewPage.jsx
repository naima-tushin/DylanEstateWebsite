import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PropertyPreviewPage = () => {
  const [propertyDetails, setPropertyDetails] = useState(null);
  const phoneEmail = localStorage.getItem('phoneEmail');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/propertyDetails/${phoneEmail}`);
        setPropertyDetails(response.data);
      } catch (error) {
        console.error('Error fetching the property details:', error);
      }
    };

    fetchData();
  }, [phoneEmail]);

  if (!propertyDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {/* Banner */}
      <div className="mb-8">
        {propertyDetails.fileURLs.length > 0 ? (
          <div className="flex overflow-x-scroll space-x-4">
            {propertyDetails.fileURLs.map((url, index) => (
              <img key={index} src={url} alt={`Property Image ${index + 1}`} className="w-full h-64 object-cover rounded-lg shadow" />
            ))}
          </div>
        ) : (
          <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg shadow">No Images Available</div>
        )}
      </div>
      
      {/* Property Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.keys(propertyDetails).map((key) => {
          if (key !== '_id' && key !== 'fileURLs' && key !== 'selectedLocation' && propertyDetails[key]) {
            return (
              <div key={key} className="p-4 border rounded-lg shadow bg-white">
                <strong className="capitalize block mb-1 text-gray-600">{key.replace(/([A-Z])/g, ' $1')}:</strong> 
                <span className="text-gray-800">{propertyDetails[key]}</span>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default PropertyPreviewPage;
