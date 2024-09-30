import React from "react";
import SearchResults from "../components/SearchResults";
import SearchMap from "../components/SearchMap";

const SearchPage = () => {
    return (
        <div className="section-container flex flex-col gap-8 lg:flex-row">
            <SearchResults />
            <SearchMap />
        </div>
    );
};

export default SearchPage;
