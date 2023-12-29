import React from 'react'
import FetchAPI from './FetchAPI';
import { useState, useRef } from 'react';

function SearchBar () {
    // const SearchBox = () => {}
    const [query, setQuery] = useState("");
    const inputRef = useRef();

    function checkTerm (e) {
        const searchTerms = ["hey", "hello" ,"blaeh", "boooboo", "yeay","hooray"];

        // const searchTerms = searchTerm.map((term) => 
        //     <li>{term}</li>
        // );
        const foundList = searchTerms.includes(inputRef.current.value)
        // alert('it works!');

        // e.preventDefault();
        alert(inputRef.current.value)
        return (
            <ul>
                {foundList}
            </ul>
        )
    };

    return (
        <form action="" onSubmit={checkTerm}>
            {/* <ul>
                {searchTerms}
            </ul> */}
            <div className="search-form">
                <input className="search-box" name="query" placeholder="Message Adrian's AI..."  value={query} ref={inputRef} onChange={(e) => setQuery(e.target.value)}/>
                <FetchAPI></FetchAPI>
            </div>
        </form>
    )
}

export default SearchBar