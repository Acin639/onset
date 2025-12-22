
import React from 'react';

export default function SearchBar({query, setQuery}) {
  return (
    <div className="search-wrapper">
      <input
        className="search-input"
        placeholder="Avatar"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </div>
  );
}
