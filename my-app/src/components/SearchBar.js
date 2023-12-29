import React from 'react'
import FetchAPI from './FetchAPI';
import { useState, useEffect } from 'react';
function SearchBar () {
    // const SearchBox = () => {}
        const [query, setQuery] = useState("");
        const searchTerm = ["hey", "hello" ,"blaeh", "boooboo", "yeay","hooray"];
        const searchTerms = searchTerm.map((term) => 
            <li>{term}</li>
        );
    return (
        <form action="">
            <ul>
                {searchTerms}
            </ul>
            <div className="search-form">
                <input className="search-box" name="query" placeholder="Message Adrian's AI..."  value={query} onChange={(e) => setQuery(e.target.value)}/>
                <FetchAPI></FetchAPI>
            </div>
        </form>
    )
}

export default SearchBar