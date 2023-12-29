import React from 'react'
import FetchAPI from './FetchAPI';
import { useState, useRef } from 'react';

function SearchBar () {
    const [query, setQuery] = useState("");
    const [terms, setTerms] = useState(["hey", "hello" ,"blaeh", "boooboo", "yeay","hooray"])
    const [visibility, setVisible] = useState(false);
    const inputRef = useRef();
    const foundTerms = terms.filter((term) => {return term.toLowerCase().includes(query.toLowerCase())});

    function checkTerm (e) {
        if (inputRef.current.value === "") return;
        setTerms(prev => {
            return [...prev,inputRef.current.value]
        });
        alert(foundTerms)
        inputRef.current.value = "";
    };

    const toggleVisibility = () => {
        setVisible(!visibility);
    };

    return (
        <>
        {/* <button onClick={toggleVisibility}></button> */}
        {visibility && foundTerms.map(term => <ul>{term}</ul>)}
        <form action="" onSubmit={checkTerm} onClick={toggleVisibility}>
            <div className="search-form">
                <input className="search-box" name="query" placeholder="Message Adrian's AI..."  value={query} ref={inputRef} onChange={(e) => setQuery(e.target.value)}/>
                <FetchAPI></FetchAPI>
            </div>
        </form>
        </>
    )
}

export default SearchBar