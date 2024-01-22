import React from 'react'
import FetchAPI from './FetchAPI';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import FadeIn from "react-fade-in";

/**
 * This component renders the search bar for querying pages.
**/

function SearchBar () {
    const [query, setQuery] = useState("");
    const [terms, setTerms] = useState(["About me", "Resume" ,"Past Projects", "GitHub", "Linkedin"])
    const [visibility, setVisible] = useState(false);
    const [searchText,setSearchText] = useState("Message Adrian's AI...");
    const inputRef = useRef();
    const formRef = useRef();
    const navigate = useNavigate();

    // Converts page title to file name
    const termToPagename = {
        "About me":"About",
        "Resume":"Resume",
        // "Transcript":"Transcript",
        "Past Projects":"Projects",
        "GitHub":"GitHub",
        "Linkedin":"Linkedin"
    }

    // Filtered list of terms from current state of search query
    const foundTerms = terms.filter((term) => {return term.toLowerCase().includes(query.toLowerCase())});

    // Function checks query for matches resets terms list
    function checkTerm (e) {
        e.preventDefault();
        if (inputRef.current.value === "") return;
        setTerms(prev => {
            return [...prev,inputRef.current.value]
        });
        inputRef.current.value = "";
        // Route user to appropriate webpage iff only one query in search
        if (foundTerms[0] === "GitHub") return(
            window.location.href = 'https://www.github.com/adrianlamlh');
        else if (foundTerms[0] === "Linkedin") return(
            window.location.href = 'https://www.linkedin.com/in/adrianlhlam');
        else if (foundTerms[0] === "Resume") return(
                window.location.href = 'https://pdfhost.io/v/Fb9pfBrpn_Resume');
        else return(
            navigate(termToPagename[foundTerms[0]]));
    };

    // Modifies visibility for form
    const toggleVisibility = () => {
        // if (formRef.current.contains(e.target))
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
            else {setVisible(true);}
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