import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import SearchBar from './SearchBar';
import parkingImage from '../../assets/images/parking.png';
import cameraImage from '../../assets/images/camera.png';
import liftImage from '../../assets/images/lift.png';
import securityImage from '../../assets/images/security.png';
import { CiCamera } from 'react-icons/ci';


const Marker = ({ text }) => <div className="marker">{text}</div>;

const PropertyDetailsForm = () => {
    const [activeTab, setActiveTab] = useState(0); // State for active tab
    const [propertyFor, setPropertyFor] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [commercialType, setCommercialType] = useState('');
    const [residentialType, setResidentialType] = useState('');
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
    const [buildingSocietyName, setBuildingSocietyName] = useState('');
    const [locality, setLocality] = useState('');
    const [landmarkStreetName, setLandmarkStreetName] = useState('');
    const [selectedLocation, setSelectedLocation] = useState({ lat: 59.95, lng: 30.33 });
    const [markers, setMarkers] = useState([]);
    const [city, setCity] = useState('');
    const [nonVeg, setNonVeg] = useState('');
    const [petsAllowed, setPetsAllowed] = useState('');
    const [furnishing, setFurnishing] = useState('');
    const [security, setSecurity] = useState('');
    const [camera, setCamera] = useState('');
    const [parking, setParking] = useState('');
    const [lift, setLift] = useState('');
    const [rent, setRent] = useState('');
    const [securityDeposit, setSecurityDeposit] = useState('');
    const [propertyDescription, setPropertyDescription] = useState('');
    const [additionPricing, setAdditionPricing] = useState('');
    const [formCompletion, setFormCompletion] = useState([false, false, false, false, false]);
    const buildingOptions = ["Gokul Village Chs 2", "Gokul Village Chs", "Gokul Village", "Gokul", "Village"];
    const localityOptions = ["Shanti Park, Miraroad East", "Shanti Park, Miraroad West", "Shanti Park, Miraroad North", "Shanti Park, Miraroad South", "Shanti Park"];
    const landmarkOptions = ["Prominent Landmark", "Landmark", "Landmark 1", "Landmark 2", "Landmark 3"];
    const cityOptions = ["Mumbai, Maharashtra", "Kolkata", "Chennai", "City 1", "City 2"];

    const handleSelect = (location) => {
        setSelectedLocation(location);
    };

    const renderMarkers = () => {
        return markers.map((marker, index) => (
            <Marker key={index} lat={marker.lat} lng={marker.lng} />
        ));
    };

    const Marker = () => <div className="marker">Marker</div>;

    const handleNextClick = () => {
        if (
            propertyFor &&
            propertyType &&
            builtUpArea &&
            carpetArea &&
            propertyOnFloor &&
            totalFloors &&
            propertyFacing &&
            propertyAge &&
            bhkType &&
            bathrooms &&
            balcony &&
            tenantPreference &&
            availability &&
            propertyDescription
        ) {
            setActiveTab(activeTab + 1);
        } else {
            alert('Please fill in all required fields');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (activeTab === 5) {
            // Handle form submission logic here
            console.log('Form submitted');
        } else {
            handleNextClick();
        }
    };

    return (
        <div className="flex items-center justify-center h-[640px] bg-white">
            <div className="border bg-white rounded-3xl shadow-2xl overflow-hidden w-[65%] h-[550px] mx-auto">
                {/* Tabs */}
                <div className="relative bg-[#FCF8F4] flex">
                    {[0, 1, 2, 3, 4].map((tabIndex) => (
                        <button
                            key={tabIndex}
                            className={`relative z-10 flex flex-col justify-center items-center py-2 px-4 text-sm w-52 h-20 ${activeTab === tabIndex ? 'bg-[#EDF2F8] text-black font-semibold' : 'text-gray-500 font-semibold'}`}
                            onClick={() => {
                                if (tabIndex <= activeTab && formCompletion[activeTab]) {
                                    setActiveTab(tabIndex);
                                }
                            }}
                            disabled={tabIndex > activeTab}
                        >
                            {tabIndex === 0 && (
                                <>
                                    <span className="tracking-wide">PROPERTY</span>
                                    <span className="tracking-wide mt-1">DETAILS</span>
                                </>
                            )}
                            {tabIndex === 1 && (
                                <>
                                    <span className="tracking-wide">LOCATION</span>
                                    <span className="tracking-wide mt-1">DETAILS</span>
                                </>
                            )}
                            {tabIndex === 2 && (
                                <>
                                    <span className="tracking-wide">FEATURES &</span>
                                    <span className="tracking-wide mt-1">AMENITIES</span>
                                </>
                            )}
                            {tabIndex === 3 && (
                                <>
                                    <span className="tracking-wide">PRICE DETAILS</span>
                                </>
                            )}
                            {tabIndex === 4 && (
                                <>
                                    <span className="tracking-wide">PROPERTY</span>
                                    <span className="tracking-wide mt-1">IMAGES</span>
                                </>
                            )}
                        </button>
                    ))}
                </div>
                <div className="flex">
                    {[0, 1, 2, 3, 4].map((tabIndex) => (
                        <div
                            key={tabIndex}
                            className={`flex-1 border-4 transition-all duration-1000 ${tabIndex <= activeTab ? 'border-[#122B49]' : 'border-gray-300'}`}
                        />
                    ))}
                </div>
                {/* Property details form */}
                <div className="form-container" style={{ maxHeight: '395px', overflowY: 'auto' }}>
                    {/* Tab 1 Fields */}
                    {activeTab == 0 ? (
                        <form className="property-form px-14 py-8" onSubmit={handleSubmit}>
                            <div>
                                <label className='text-lg font-semibold'><span className="text-red-500 mr-1">*</span>Property For:</label>
                                <div className='mt-3 flex justify-between w-[400px] ml-2 mb-8'>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="propertyFor"
                                            value="rent"
                                            checked={propertyFor === 'rent'}
                                            onChange={(e) => setPropertyFor(e.target.value)}
                                            className='form-radio h-6 w-6 text-[#122B49] focus:ring-[#122B49] border-[#122B49]'
                                        />
                                        <span className="ml-6 text-gray-700 text-lg">Rent</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="propertyFor"
                                            value="sale"
                                            checked={propertyFor === 'sale'}
                                            onChange={(e) => setPropertyFor(e.target.value)}
                                            className='form-radio h-6 w-6 text-[#122B49] focus:ring-[#122B49] border-[#122B49]'
                                        />
                                        <span className="ml-6 text-gray-700 text-lg">Sale</span>
                                    </label>
                                </div>
                                <br />
                                <label className='text-lg font-semibold'><span className="text-red-500 mr-1">*</span>Property Type:</label>
                                <div className='mt-3 flex justify-between w-[780px] ml-2 mb-4'>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="propertyType"
                                            value="residential"
                                            checked={propertyType === 'residential'}
                                            onChange={(e) => setPropertyType(e.target.value)}
                                            className='form-radio h-6 w-6 text-[#122B49] focus:ring-[#122B49] border-[#122B49]'
                                        />
                                        <span className="ml-6 text-gray-700 text-lg">Residential</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="propertyType"
                                            value="commercial"
                                            checked={propertyType === 'commercial'}
                                            onChange={(e) => setPropertyType(e.target.value)}
                                            className='form-radio h-6 w-6 text-[#122B49] focus:ring-[#122B49] border-[#122B49]'
                                        />
                                        <span className="ml-6 text-gray-700 text-lg">Commercial</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="propertyType"
                                            value="land"
                                            checked={propertyType === 'land'}
                                            onChange={(e) => setPropertyType(e.target.value)}
                                            className='form-radio h-6 w-6 text-[#122B49] focus:ring-[#122B49] border-[#122B49]'
                                        />
                                        <span className="ml-6 text-gray-700 text-lg">Land/Plot</span>
                                    </label>
                                </div>
                                <br />
                                {propertyType === 'residential' && (
                                    <div className="flex space-x-2 mb-6">
                                        {["Flat / Apartment", "House / Villa"].map((type) => (
                                            <button
                                                key={type}
                                                type="button"
                                                className={`py-2 px-5 rounded-full text-base border font-medium ${residentialType === type ? 'bg-[#122B49] text-white' : ''}`}
                                                onClick={() => setResidentialType(type)}
                                            >
                                                {type}
                                            </button>
                                        ))}
                                    </div>
                                )}
                                {propertyType === 'commercial' && (
                                    <div className="grid grid-cols-3 gap-4 mb-6">
                                        {["Office Space", "Co Working", "Restaurant / Cafe", "Shop / Showroom", "Industrial Bldg.", "Industrial Shed", "Warehouse / Godown"].map((type) => (
                                            <button
                                                key={type}
                                                type="button"
                                                className={`py-2 px-4 rounded-full text-base font-medium border ${commercialType === type ? 'bg-[#122B49] text-white' : ''}`}
                                                onClick={() => setCommercialType(type)}
                                            >
                                                {type}
                                            </button>
                                        ))}
                                    </div>
                                )}
                                <br />
                                <div className="grid grid-cols-2 gap-16">
                                    <div>
                                        <label className='text-lg font-semibold'>Built Up Area:<span className="text-red-500 ml-1">*</span></label>
                                        <div className="relative">
                                            <input
                                                type="number"
                                                name="builtUpArea"
                                                value={builtUpArea}
                                                onChange={(e) => setBuiltUpArea(e.target.value)}
                                                placeholder='0'
                                                className="mt-3 block w-full p-4 border border-gray-300 rounded-md shadow-sm mb-8 sm:text-sm"
                                            />
                                            <span className="absolute inset-y-0 right-0 pr-10 flex items-center text-gray-400 pointer-events-none">
                                                Sq. Ft.
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <label className='text-lg font-semibold'>Carpet Area:<span className="text-red-500 ml-1">*</span></label>
                                        <div className="relative">
                                            <input
                                                type="number"
                                                name="carpetArea"
                                                value={carpetArea}
                                                onChange={(e) => setCarpetArea(e.target.value)}
                                                placeholder='0'
                                                className="mt-3 block w-full p-4 border border-gray-300 rounded-md shadow-sm mb-8 sm:text-sm"
                                            />
                                            <span className="absolute inset-y-0 right-0 pr-10 flex items-center text-gray-400 pointer-events-none">
                                                Sq. Ft.
                                            </span>
                                        </div>
                                    </div>

                                </div>
                                <br />
                                <div className="grid grid-cols-2 gap-16">
                                    <div className="grid grid-cols-2 gap-8">
                                        <div className="">
                                            <label className='text-lg font-semibold'>Property on Floor:<span className="text-red-500 ml-1">*</span></label>
                                            <input
                                                type="number"
                                                name="propertyOnFloor"
                                                value={propertyOnFloor}
                                                placeholder='Floor'
                                                onChange={(e) => setPropertyOnFloor(e.target.value)}
                                                className="mt-3 block w-full p-4 border border-gray-300 rounded-md shadow-sm mb-8 sm:text-sm"
                                            />
                                        </div>
                                        <div className="">
                                            <label className='text-lg font-semibold'>Total Floors:<span className="text-red-500 ml-1">*</span></label>
                                            <input
                                                type="number"
                                                name="totalFloors"
                                                value={totalFloors}
                                                placeholder='Total Floor'
                                                onChange={(e) => setTotalFloors(e.target.value)}
                                                className="mt-3 block w-full p-4 border border-gray-300 rounded-md shadow-sm mb-8 sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div className="">
                                        <label className='text-lg font-semibold'>Property Facing:<span className="text-red-500 ml-1">*</span></label>
                                        <select
                                            name="propertyFacing"
                                            value={propertyFacing}
                                            onChange={(e) => setPropertyFacing(e.target.value)}
                                            className="mt-3 py-4 block w-full p-4 border border-gray-300 rounded-md shadow-sm mb-8 sm:text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="north">North</option>
                                            <option value="east">South</option>
                                            <option value="west">East</option>
                                            <option value="south">West</option>
                                            <option value="north-east">North-East</option>
                                            <option value="north-west">South-East</option>
                                            <option value="south-east">North-West</option>
                                            <option value="south-west">South-West</option>
                                        </select>
                                    </div>
                                </div>

                                <br />
                                <label className='text-lg font-semibold'>Property Age:<span className="text-red-500 ml-1">*</span></label>
                                <div className="flex space-x-4 mt-3">
                                    {["Less than 1 year", "1 - 3 years", "3 - 5 years", "5 - 10 years", "Greater than 10 years"].map((age) => (
                                        <button
                                            key={age}
                                            type="button"
                                            className={`py-3 px-9 mb-8 rounded-full text-sm border ${propertyAge === age ? 'bg-[#122B49] text-white' : 'font-medium text-lg'}`}
                                            onClick={() => setPropertyAge(age)}
                                        >
                                            {age}
                                        </button>
                                    ))}
                                </div>
                                <br />
                                <label className='text-lg font-semibold'>BHK Type:<span className="text-red-500 ml-1">*</span></label>
                                <div className="flex space-x-4 mt-3">
                                    {["1 RK", "1 BHK", "2 BHK", "3 BHK", "4 BHK", "5+ BHK"].map((bhk) => (
                                        <button
                                            key={bhk}
                                            type="button"
                                            className={`py-3 px-9 mb-8 rounded-full text-sm border ${bhkType === bhk ? 'bg-[#122B49] text-white' : 'font-medium text-lg'}`}
                                            onClick={() => setBhkType(bhk)}
                                        >
                                            {bhk}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <br />
                            <label className='text-lg font-semibold'>Bathrooms / Toilets:<span className="text-red-500 ml-1">*</span></label>
                            <div className="flex space-x-6 mt-3">
                                {["1", "2", "3", "4", "5", "6+"].map((bathroom) => (
                                    <button
                                        key={bathroom}
                                        type="button"
                                        className={`py-3 px-7 mb-8 rounded-full text-sm border ${bathrooms === bathroom ? 'bg-[#122B49] text-white' : 'font-medium text-lg'}`}
                                        onClick={() => setBathrooms(bathroom)}
                                    >
                                        {bathroom}
                                    </button>
                                ))}
                            </div>

                            <br />
                            <label className='text-lg font-semibold'>Balcony:<span className="text-red-500 ml-1">*</span></label>
                            <div className="flex space-x-6 mt-3">
                                {["0", "1", "2", "3", "4+"].map((blc) => (
                                    <button
                                        key={blc}
                                        type="button"
                                        className={`py-3 px-7 rounded-full mb-8 text-sm border ${balcony === blc ? 'bg-[#122B49] text-white' : 'font-medium text-lg'}`}
                                        onClick={() => setBalcony(blc)}
                                    >
                                        {blc}
                                    </button>
                                ))}
                            </div>


                            <br />
                            <label className='text-lg font-semibold'>Tenant Preference:<span className="text-red-500 ml-1">*</span></label>
                            <div className="flex space-x-6 mt-3">
                                {["Any", "Family", "Bachelor (Man)", "Bachelor (Women)"].map((tenant) => (
                                    <button
                                        key={tenant}
                                        type="button"
                                        className={`py-3 px-9 mb-8 rounded-full text-sm border ${tenantPreference === tenant ? 'bg-[#122B49] text-white' : 'font-medium text-lg'}`}
                                        onClick={() => setTenantPreference(tenant)}
                                    >
                                        {tenant}
                                    </button>
                                ))}
                            </div>

                            <br />
                            <label className='text-lg font-semibold'>Availability:<span className="text-red-500 ml-1">*</span></label>
                            <div className="flex space-x-6 mt-3">
                                {["Immediate", "Within 15 days", "Within 1 Month", "Within 2 Months"].map((available) => (
                                    <button
                                        key={available}
                                        type="button"
                                        className={`py-3 px-9 mb-8 rounded-full text-sm border ${availability === available ? 'bg-[#122B49] text-white' : 'font-medium text-lg'}`}
                                        onClick={() => setAvailability(available)}
                                    >
                                        {available}
                                    </button>
                                ))}
                            </div>
                            <br />
                            <label className='text-lg font-semibold'>Property Description:<span className="text-red-500 ml-1">*</span></label>
                            <input type="text" id="property-description"
                                value={propertyDescription}
                                name="property-description"
                                onChange={(e) => setPropertyDescription(e.target.value)}
                                placeholder="Add a description for your property to attract the best tenant"
                                class="w-full px-4 mt-3 mb-8 border border-gray-300 rounded-lg h-24" />

                        </form>) :
                        /* Tab 2 Fields */
                        activeTab == 1 ? (
                            <form className="property-form px-14 py-8" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <label className='text-lg font-semibold'>Building/Society Name<span className="text-red-500 ml-1">*</span></label>
                                        <select
                                            value={buildingSocietyName}
                                            onChange={(e) => setBuildingSocietyName(e.target.value)}
                                            className="mt-3 block w-full p-4 border border-gray-300 rounded-md shadow-sm mb-8 sm:text-sm"
                                        >
                                            <option value="" disabled selected hidden>Enter Apartment Name</option>
                                            {buildingOptions.map((option, index) => (
                                                <option key={index} value={option}>{option}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className='text-lg font-semibold'>Locality/Area<span className="text-red-500 ml-1">*</span></label>
                                        <select
                                            value={locality}
                                            onChange={(e) => setLocality(e.target.value)}
                                            className="mt-3 block w-full p-4 border border-gray-300 rounded-md shadow-sm mb-8 sm:text-sm"
                                        >
                                            <option value="" disabled selected hidden>Eg : sheetal nagar</option>
                                            {localityOptions.map((option, index) => (
                                                <option key={index} value={option}>{option}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className='text-lg font-semibold'>Landmark/Street Name</label>
                                        <select
                                            value={landmarkStreetName}
                                            onChange={(e) => setLandmarkStreetName(e.target.value)}
                                            className="mt-3 block w-full p-4 border border-gray-300 rounded-md shadow-sm mb-12 sm:text-sm"
                                        >
                                            <option value="" disabled selected hidden>Prominent Landmark</option>
                                            {landmarkOptions.map((option, index) => (
                                                <option key={index} value={option}>{option}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className='text-lg font-semibold'>City</label>
                                        <select
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}
                                            className="mt-3 block w-full p-4 border border-gray-300 rounded-md shadow-sm mb-12 sm:text-sm"
                                        >
                                            <option value="" disabled selected hidden>Mumbai, Maharashtra</option>
                                            {cityOptions.map((option, index) => (
                                                <option key={index} value={option}>{option}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                {/* Map section */}
                                <div className="map-container">
                                    <div style={{ height: '400px', position: 'relative' }}>
                                    <textfield label="Search Locations" variant="outlined"></textfield>
                                        <SearchBar onSelect={handleSelect} />
                                        <div style={{ height: '100%', width: '100%', position: 'relative' }}>
                                            <GoogleMapReact
                                                bootstrapURLKeys={{ key: '', libraries: ['places'] }} 
                                                defaultCenter={{ lat: 59.95, lng: 30.33 }}
                                                defaultZoom={11} 
                                                center={selectedLocation}
                                                style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }}
                                            >
                                                {renderMarkers()}
                                            </GoogleMapReact>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        )
                            :
                            /* Tab 3 Fields */
                            activeTab == 2 ? (
                                <form className="property-form px-14 py-8" onSubmit={handleSubmit}>
                                    <div>
                                        <label className='text-lg font-semibold'>General Features</label>
                                        <br />
                                        <br />
                                        <label className='text-lg font-semibold'><span className="text-red-500 mr-1">*</span>Non-Veg</label>
                                        <div className='mt-2 flex justify-between w-[400px] ml-2 mb-12'>
                                            <label className="inline-flex items-center">
                                                <input
                                                    type="radio"
                                                    name="nonVeg"
                                                    value="Allowed"
                                                    checked={nonVeg === 'Allowed'}
                                                    onChange={(e) => setNonVeg(e.target.value)}
                                                    className='form-radio h-6 w-6 text-[#122B49] focus:ring-[#122B49] border-[#122B49]'
                                                />
                                                <span className="ml-6 text-gray-700 text-lg">Allowed</span>
                                            </label>
                                            <label className="inline-flex items-center">
                                                <input
                                                    type="radio"
                                                    name="nonVeg"
                                                    value="Not Allowed"
                                                    checked={nonVeg === 'Not Allowed'}
                                                    onChange={(e) => setNonVeg(e.target.value)}
                                                    className='form-radio h-6 w-6 text-[#122B49] focus:ring-[#122B49] border-[#122B49]'
                                                />
                                                <span className="ml-6 text-gray-700 text-lg">Not Allowed</span>
                                            </label>
                                        </div>
                                        <br />
                                        <label className='text-lg font-semibold'><span className="text-red-500 mr-1">*</span>Pets Allowed:</label>
                                        <div className='mt-2 flex justify-between w-[780px] ml-2'>
                                            <label className="inline-flex items-center">
                                                <input
                                                    type="radio"
                                                    name="petsAllowed"
                                                    value="Yes"
                                                    checked={petsAllowed === 'Yes'}
                                                    onChange={(e) => setPetsAllowed(e.target.value)}
                                                    className='form-radio h-6 w-6 text-[#122B49] focus:ring-[#122B49] border-[#122B49]'
                                                />
                                                <span className="ml-6 text-gray-700 text-lg">Yes</span>
                                            </label>
                                            <label className="inline-flex items-center">
                                                <input
                                                    type="radio"
                                                    name="petsAllowed"
                                                    value="No"
                                                    checked={petsAllowed === 'No'}
                                                    onChange={(e) => setPetsAllowed(e.target.value)}
                                                    className='form-radio h-6 w-6 text-[#122B49] focus:ring-[#122B49] border-[#122B49]'
                                                />
                                                <span className="ml-6 text-gray-700 text-lg">No</span>
                                            </label>
                                        </div>
                                        <br />
                                        <hr />
                                        <br />
                                        <label className='text-lg font-semibold'><span className="text-red-500 mr-1">*</span>Furnishing</label>
                                        <div className='mt-2 flex justify-between w-[780px] ml-2'>
                                            <label className="inline-flex items-center">
                                                <input
                                                    type="checkbox"
                                                    name="furnishing"
                                                    value="Fully Furnished"
                                                    checked={furnishing === 'Fully Furnished'}
                                                    onChange={(e) => setFurnishing(e.target.value)}
                                                    className='form-radio h-6 w-6 text-[#122B49] focus:ring-[#122B49] border-[#122B49]'
                                                />
                                                <span className="ml-6 text-gray-700 text-lg">Fully Furnished</span>
                                            </label>
                                            <label className="inline-flex items-center">
                                                <input
                                                    type="checkbox"
                                                    name="furnishing"
                                                    value="Semi Furnished"
                                                    checked={furnishing === 'Semi Furnished'}
                                                    onChange={(e) => setFurnishing(e.target.value)}
                                                    className='form-radio h-6 w-6 text-[#122B49] focus:ring-[#122B49] border-[#122B49]'
                                                />
                                                <span className="ml-6 text-gray-700 text-lg">Semi Furnished</span>
                                            </label>
                                            <label className="inline-flex items-center">
                                                <input
                                                    type="checkbox"
                                                    name="furnishing"
                                                    value="Unfurnished"
                                                    checked={furnishing === 'Unfurnished'}
                                                    onChange={(e) => setFurnishing(e.target.value)}
                                                    className='form-radio h-6 w-6 text-[#122B49] focus:ring-[#122B49] border-[#122B49]'
                                                />
                                                <span className="ml-6 text-gray-700 text-lg">Unfurnished</span>
                                            </label>

                                        </div>
                                        <br />
                                        <hr />
                                        <br />
                                        <label className='text-lg font-semibold'>Social Amenities</label>
                                        <br />
                                        <br />

                                        <div className='mt-2 flex justify-between w-[780px] ml-2'>
                                            <label className="flex flex-col items-center text-center">
                                                <img src={securityImage} alt="Security" className="h-7 w-7 object-cover mb-2" />
                                                <span className="ml-2 text-gray-700 text-base mb-7">24/7 Security</span>
                                                <input
                                                    type="checkbox"
                                                    name="security"
                                                    value="24/7 Security"
                                                    checked={security === '24/7 Security'}
                                                    onChange={(e) => security != e.target.value ? setSecurity(e.target.value) : setSecurity('')}
                                                    className='form-radio h-6 w-6 text-[#122B49] focus:ring-[#122B49] border-[#122B49]'
                                                />

                                            </label>

                                            <label className="flex flex-col items-center text-center">
                                                <img src={cameraImage} alt="CCTV Camera" className="h-7 w-7 object-cover mb-2" />
                                                <span className="ml-2 text-gray-700 text-base mb-7">CCTV Camera</span>
                                                <input
                                                    type="checkbox"
                                                    name="camera"
                                                    value="CCTV Camera"
                                                    checked={camera === 'CCTV Camera'}
                                                    onChange={(e) => camera != e.target.value ? setCamera(e.target.value) : setCamera('')}
                                                    className='form-radio h-6 w-6 text-[#122B49] focus:ring-[#122B49] border-[#122B49]'
                                                />

                                            </label>


                                            <label className="flex flex-col items-center text-center">
                                                <img src={liftImage} alt="Lift" className="h-7 w-7 object-cover mb-2" />
                                                <span className="ml-2 text-gray-700 text-base mb-7">Lift</span>
                                                <input
                                                    type="checkbox"
                                                    name="Lift"
                                                    value="Lift"
                                                    checked={lift === 'Lift'}
                                                    onChange={(e) => lift != e.target.value ? setLift(e.target.value) : setLift('')}
                                                    className='form-radio h-6 w-6 text-[#122B49] focus:ring-[#122B49] border-[#122B49]'
                                                />

                                            </label>
                                            <label className="flex flex-col items-center text-center">
                                                <img src={parkingImage} alt="Reserved Parking" className="h-7 w-7 object-cover mb-2" />
                                                <span className="ml-2 text-gray-700 text-base mb-7">Reserved Parking</span>
                                                <input
                                                    type="checkbox"
                                                    name="Reserved Parking"
                                                    value="Reserved Parking"
                                                    checked={parking === 'Reserved Parking'}
                                                    onChange={(e) => parking != e.target.value ? setParking(e.target.value) : setParking('')}
                                                    className='form-radio h-6 w-6 text-[#122B49] focus:ring-[#122B49] border-[#122B49]'
                                                />

                                            </label>

                                        </div>

                                    </div> </form>) :
                                /* Tab 4 Fields */
                                activeTab == 3 ? (
                                    <form className="property-form px-14 py-8" onSubmit={handleSubmit}>
                                        <div><br />
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className='text-lg font-semibold'><span className="text-red-500 mr-1">*
                                                    </span>Rent:</label>
                                                    <div className="relative">

                                                        <input
                                                            type="text"
                                                            name="rent"
                                                            placeholder='₹'
                                                            value={rent}
                                                            onChange={(e) => setRent(e.target.value)}
                                                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        />

                                                        <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 pointer-events-none">
                                                            / Month
                                                        </span>

                                                    </div>
                                                </div>
                                                <div>
                                                    <label className='text-lg font-semibold'><span className="text-red-500 mr-1">*</span>Security</label>
                                                    <div className="relative">
                                                        <input
                                                            type="text"
                                                            name="Security Deposit"
                                                            placeholder='₹'
                                                            value={securityDeposit}
                                                            onChange={(e) => setSecurityDeposit(e.target.value)}
                                                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        />
                                                        <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 pointer-events-none">
                                                            / Month
                                                        </span>
                                                    </div>
                                                </div>

                                            </div>
                                            <br />
                                            <br />
                                            <label className='text-lg font-semibold'><span className="text-red-500 mr-1">*</span>Additional Pricing details to convey to agent?</label>
                                            <input type="text"
                                                id="additionalPricing"
                                                name="additionalPricing"
                                                value={additionPricing}
                                                onChange={(e) => setAdditionPricing(e.target.value)}
                                                placeholder="Do you have any concerns regarding pricing of your property? Add your concerns here or call us"
                                                class="w-full px-4 mt-2 border border-gray-300 rounded-lg h-24" />
                                        </div>
                                    </form>) :
                                    /* Tab 5 Fields */
                                    (<form className="property-form px-14 py-8" onSubmit={handleSubmit}>
                                        <div className="border-black border-2 w-[90%] h-[400px] mx-auto p-4 text-center">
                                            <div>
                                                <CiCamera></CiCamera>
                                            </div>

                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                                                Add Photos
                                            </button>
                                        </div>
                                    </form>
                                    )}
                </div>
                {/* Navigation buttons */}
                <div className="flex bg-[#122B49] justify-between items-center py-4 px-16 ">
                    <p className="text-sm text-white">Need Help? Call 9999999999</p>
                    <div className="flex justify-end">
                        {activeTab < 5 && (
                            <button
                                type="button"
                                className="bg-[#122B49] border text-white px-8 py-1 text-base rounded-md"
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
                </div>
            </div>
        </div>
    );
};

export default PropertyDetailsForm;

