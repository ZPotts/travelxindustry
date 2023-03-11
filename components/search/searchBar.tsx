import { React, useState } from "react";

import SearchResults from "./searchResults";

import searchList from '../../data/search.json';


const SearchBar = () => {
    console.log(searchList);
    const [searchInput, setSearchInput] = useState("");

    let inputHandler = (e) => {
        e.preventDefault();
        let searchValue = e.target.value.toLowerCase();
        setSearchInput(searchValue);
    };

    const filteredData = searchList.filter((el) => {
        if (searchInput === ''){
            console.log('el:')
            return el;
        } else {
            const allSearchResults = el.search.toLowerCase().includes(`|${searchInput}`);
            /* let shortResults = allSearchResults.slice(0,10); */
            return allSearchResults;
        }
    })

    console.log(filteredData);

    return(
        <div className="search">
            <input 
                type="text"
                placeholder="Search here"
                onChange={inputHandler}
            />
            <SearchResults where={filteredData} />
        </div>
    )

}

export default SearchBar;
