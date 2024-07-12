
import React, { useState } from 'react';
import { LoadScript, Autocomplete } from '@react-google-maps/api';

const SearchBar = ({ onSelect }) => {
    const [autocomplete, setAutocomplete] = useState(null);

    const onLoad = (autoComplete) => {
        setAutocomplete(autoComplete);
    };

    const onPlaceChanged = () => {
        if (autocomplete !== null) {
            const place = autocomplete.getPlace();
            if (!place.geometry || !place.geometry.location) {
                console.error('Place selected does not have geometry or location:', place);
                return;
            }
            onSelect({
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng(),
            });
        } else {
            console.error('Autocomplete is not loaded yet!');
        }
    };

    return (
        <div className="search-bar-container">
            <LoadScript
                googleMapsApiKey="AIzaSyAQPYJ9RKH67lfiy8fy4WEDbZoVnCMQt4M"
                libraries={["places"]}
            >
                <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                    <input
                        type="text"
                        placeholder="Search for a place"
                        className="search-input"
                    />
                </Autocomplete>
            </LoadScript>
        </div>
    );
};

export default SearchBar;
