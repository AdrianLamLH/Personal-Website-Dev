import React from 'react'
import FetchAPI from './FetchAPI';
import { useState, useRef } from 'react';

function SearchBar () {
    // const SearchBox = () => {}
    const [query, setQuery] = useState("");
    const [terms, setTerms] = useState([])
    const inputRef = useRef();
    const foundTerms = terms.filter((term) => {return term.includes(query)});

    function checkTerm (e) {
        const terms = ["hey", "hello" ,"blaeh", "boooboo", "yeay","hooray"];
        // alert('it works!');
        setTerms(["hey", "hello" ,"blaeh", "boooboo", "yeay","hooray"]);
        e.preventDefault();
        alert(inputRef.current.value)
        // return (
        // )
    };

    return (
        <>
        {terms.map(term  => <ul>{term}</ul>)}
        <form action="" onSubmit={checkTerm}>
            <div className="search-form">
                <input className="search-box" name="query" placeholder="Message Adrian's AI..."  value={query} ref={inputRef} onChange={(e) => setQuery(e.target.value)}/>
                <FetchAPI></FetchAPI>
            </div>
        </form>
        </>
    )
}

export default SearchBar