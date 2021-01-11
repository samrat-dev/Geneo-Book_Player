import React from 'react';
import './search-box.css';

export const SearchBox = ({ placeholder, handleChange }) => {
    return <div className='search-input'>
        <input type="search"
            className="search"
            placeholder={placeholder}
            onChange={handleChange}
        />
    </div>;
}

