import React, { useState } from 'react';

const PropertyDetailsForm = () => {
    const [activeTab, setActiveTab] = useState(1); // State for active tab
    const [propertyFor, setPropertyFor] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [builtUpArea, setBuiltUpArea] = useState('');
    const [carpetArea, setCarpetArea] = useState('');
    const [propertyOnFloor, setPropertyOnFloor] = useState('');
    const [totalFloors, setTotalFloors] = useState('');
    const [propertyFacing, setPropertyFacing] = useState('');
    const [propertyAge, setPropertyAge] = useState('');
    const [bhkType, setBhkType] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [balcony, setBalcony] = useState('');
    const [tenantPreference, setTenantPreference] = useState('');
    const [availability, setAvailability] = useState('');
    const [propertyDescription, setPropertyDescription] = useState('');

    const handleNextClick = () => {
        if (activeTab === 1 && (!propertyFor || !propertyType)) {
            alert('Please fill out Property For and Property Type');
            return;
        }
        if (activeTab === 2 && (!propertyAge || !bhkType)) {
            alert('Please fill out Property Age and BHK Type');
            return;
        }
        if (activeTab === 3 && (!bathrooms || !balcony)) {
            alert('Please fill out Bathrooms/Toilets and Balcony');
            return;
        }
        if (activeTab === 4 && (!tenantPreference || !availability)) {
            alert('Please fill out Tenant Preference and Availability');
            return;
        }
        if (activeTab === 5 && !propertyDescription) {
            alert('Please fill out Property Description');
            return;
        }

        if (activeTab < 5) {
            setActiveTab(activeTab + 1);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 

        if (!propertyDescription) {
            alert('Please fill out Property Description');
            return;
        }

        console.log('Form submitted successfully!');
    };

    return (
        <div className="form-container">
            <div className="border bg-white rounded-lg w-[80%] mx-auto p-4">
                {/* Tabs */}
                <div className="flex space-x-4 mb-4">
                    {[1, 2, 3, 4, 5].map((tabIndex) => (
                        <button
                            key={tabIndex}
                            className={`py-2 px-4 rounded-lg text-sm ${activeTab === tabIndex ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`}
                            onClick={() => {
                                // Allow tab change only after clicking "Next"
                                if (tabIndex <= activeTab) {
                                    setActiveTab(tabIndex);
                                }
                            }}
                        >
                            Tab {tabIndex}
                        </button>
                    ))}
                </div>

                {/* Property details form */}
                <form className="property-form" onSubmit={handleSubmit}>
                    {/* Form sections */}
                    <div className={`form-section ${activeTab !== 1 ? 'hidden' : ''}`}>
                        {/* Tab 1 Fields */}
                        <label>Property For:</label>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="propertyFor"
                                    value="rent"
                                    checked={propertyFor === 'rent'}
                                    onChange={(e) => setPropertyFor(e.target.value)}
                                />
                                Rent
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="propertyFor"
                                    value="sale"
                                    checked={propertyFor === 'sale'}
                                    onChange={(e) => setPropertyFor(e.target.value)}
                                />
                                Sale
                            </label>
                        </div>
                        <br />
                        <label>Property Type:</label>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="propertyType"
                                    value="residential"
                                    checked={propertyType === 'residential'}
                                    onChange={(e) => setPropertyType(e.target.value)}
                                />
                                Residential
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="propertyType"
                                    value="commercial"
                                    checked={propertyType === 'commercial'}
                                    onChange={(e) => setPropertyType(e.target.value)}
                                />
                                Commercial
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="propertyType"
                                    value="land"
                                    checked={propertyType === 'land'}
                                    onChange={(e) => setPropertyType(e.target.value)}
                                />
                                Land/Plot
                            </label>
                        </div>
                        <br />
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Built up Area</label>
                                <input
                                    type="text"
                                    name="builtUpArea"
                                    value={builtUpArea}
                                    onChange={(e) => setBuiltUpArea(e.target.value)}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Carpet Area</label>
                                <input
                                    type="text"
                                    name="carpetArea"
                                    value={carpetArea}
                                    onChange={(e) => setCarpetArea(e.target.value)}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        <br />
                        <div className="grid grid-cols-4 gap-4">
                            <div className="col-span-0.5">
                                <label className="block text-sm font-medium text-gray-700">Property on Floor</label>
                                <input
                                    type="text"
                                    name="propertyOnFloor"
                                    value={propertyOnFloor}
                                    onChange={(e) => setPropertyOnFloor(e.target.value)}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="col-span-0.5">
                                <label className="block text-sm font-medium text-gray-700">Total Floors</label>
                                <input
                                    type="text"
                                    name="totalFloors"
                                    value={totalFloors}
                                    onChange={(e) => setTotalFloors(e.target.value)}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="col-span-2">
                                <label className="block text-sm font-medium text-gray-700">Property Facing</label>
                                <select
                                    name="propertyFacing"
                                    value={propertyFacing}
                                    onChange={(e) => setPropertyFacing(e.target.value)}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                    <option value="">Select</option>
                                    <option value="north">North</option>
                                    <option value="east">East</option>
                                    <option value="west">West</option>
                                    <option value="south">South</option>
                                    <option value="north-east">North-East</option>
                                    <option value="north-west">North-West</option>
                                    <option value="south-east">South-East</option>
                                    <option value="south-west">South-West</option>
                                </select>
                            </div>
                        </div>
                        <br />
                        <label>Property Age:</label>
                        <div className="flex space-x-2">
                            {["Less than 1 year", "1-3 years", "3-5 years", "5-10 years", "Greater than 10 years"].map((age) => (
                                <button
                                    key={age}
                                    type="button"
                                    className={`py-1 px-3 rounded-full text-sm border ${propertyAge === age ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`}
                                    onClick={() => setPropertyAge(age)}
                                >
                                    {age}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className={`form-section ${activeTab !== 2 ? 'hidden' : ''}`}>
                        {/* Tab 2 Fields */}
                        <label htmlFor="propertyAge">Property Age:</label>
                        <input type="text" id="propertyAge" value={propertyAge} onChange={(e) => setPropertyAge(e.target.value)} />
                        {/* Add more fields as needed */}
                        <br />
                        <label htmlFor="bhkType">BHK Type:</label>
                        <input type="text" id="bhkType" value={bhkType} onChange={(e) => setBhkType(e.target.value)} />
                    </div>

                    <div className={`form-section ${activeTab !== 3 ? 'hidden' : ''}`}>
                        {/* Tab 3 Fields */}
                        <label htmlFor="bathrooms">Bathrooms/Toilets:</label>
                        <input type="text" id="bathrooms" value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} />
                        {/* Add more fields as needed */}
                        <br />
                        <label htmlFor="balcony">Balcony:</label>
                        <input type="text" id="balcony" value={balcony} onChange={(e) => setBalcony(e.target.value)} />
                    </div>

                    <div className={`form-section ${activeTab !== 4 ? 'hidden' : ''}`}>
                        {/* Tab 4 Fields */}
                        <label htmlFor="tenantPreference">Tenant Preference:</label>
                        <input type="text" id="tenantPreference" value={tenantPreference} onChange={(e) => setTenantPreference(e.target.value)} />
                        {/* Add more fields as needed */}
                        <br />
                        <label htmlFor="availability">Availability:</label>
                        <input type="text" id="availability" value={availability} onChange={(e) => setAvailability(e.target.value)} />
                    </div>

                    <div className={`form-section ${activeTab !== 5 ? 'hidden' : ''}`}>
                        {/* Tab 5 Fields */}
                        <label htmlFor="propertyDescription">Property Description:</label>
                        <textarea id="propertyDescription" value={propertyDescription} onChange={(e) => setPropertyDescription(e.target.value)} />
                        {/* Add more fields as needed */}
                    </div>

                    {/* Navigation buttons */}
                    <div className="flex justify-end mt-4">
                        {activeTab < 5 && (
                            <button
                                type="button"
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                                onClick={handleNextClick}
                            >
                                Next
                            </button>
                        )}
                        {activeTab === 5 && (
                            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg">
                                Submit
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PropertyDetailsForm;
