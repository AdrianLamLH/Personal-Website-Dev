import React from 'react'
import FetchAPI from './FetchAPI';
import { useState, useEffect, useRef } from 'react';
import FadeIn from "react-fade-in";

/**
 * This component renders the search bar for querying pages.
**/

function SearchBar () {
    const [query, setQuery] = useState("");
    const [terms, setTerms] = useState(["About me", "Resume", "Transcript" ,"Past Projects", "GitHub", "Linkedin"])
    const [visibility, setVisible] = useState(false);
    const [searchText,setSearchText] = useState("Message Adrian's AI...");
    const inputRef = useRef();
    const formRef = useRef();

    // Filtered list of terms from current state of search query
    const foundTerms = terms.filter((term) => {return term.toLowerCase().includes(query.toLowerCase())});

    // Function checks query for matches resets terms list
    function checkTerm (e) {
        if (inputRef.current.value === "") return;
        setTerms(prev => {
            return [...prev,inputRef.current.value]
        });
        alert(foundTerms)
        inputRef.current.value = "";
    };

    // Modifies visibility for form
    const toggleVisibility = () => {
        setVisible(!visibility);
        setSearchText("");
    };

    // Event listener for clicks on/off of input box
    // conditional visibility on element if focused
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (formRef.current && !formRef.current.contains(e.target)) {
                setVisible(false);
                setSearchText("Message Adrian's AI...");
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <>
        {/* Condition for showing filtered search terms list */}
        <FadeIn delay="100">
        {visibility && foundTerms.map(term => <ul>{term}</ul>)}
        </FadeIn>
        <form action="" className="search-form" onSubmit={checkTerm} ref={formRef} onClick={toggleVisibility}>
            <div className="search-form-bar">
                {/* Dynamic input box changes as user types */}
                <input className="search-box" name="query" placeholder={searchText}  value={query} ref={inputRef} onChange={(e) => setQuery(e.target.value)}/>
                {/* Call API fetch component */}
                <FetchAPI></FetchAPI>
            </div>
        </form>
        </>
    )
}

export default SearchBar