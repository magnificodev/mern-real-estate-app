import React from "react";
import SearchOptions from "./SearchOptions";
import { listData } from "../data/dummyData";
import RealEstateItem from "./RealEstateItem";

const SearchResults = () => {
    return (
        <div className="h-[calc(100vh-5rem)] space-y-2 overflow-y-scroll scrollbar-thin lg:w-2/3">
            <h1 className="text-2xl">Search results for</h1>
            <div className="flex flex-col gap-4">
                <SearchOptions />
                <ul className="flex flex-col gap-4">
                    {listData.map((item) => (
                        <RealEstateItem key={item.id} item={item} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SearchResults;
