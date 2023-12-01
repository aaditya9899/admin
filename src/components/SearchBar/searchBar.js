    // SearchBar.js
    import React from 'react';

    const SearchBar = ({ setSearchQuery }) => {
    return (
        <input
        type="text"
        placeholder="Search..."
        onChange={(event) => setSearchQuery(event.target.value)}
        />
    );
    };

    export default SearchBar;
