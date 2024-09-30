import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchOptions = () => {
    return (
        <div className="space-y-2 text-sm">
            <div className="flex flex-col">
                <label htmlFor="location" className="font-medium">
                    Location
                </label>
                <input
                    type="text"
                    name="location"
                    id="location"
                    placeholder="City Location"
                    className="rounded-md border-2 text-sm focus:outline-none focus:ring-0"
                />
            </div>
            <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 md:grid-cols-5">
                    <div className="flex flex-col">
                        <label htmlFor="type" className="font-medium">
                            Type
                        </label>
                        <select
                            name="type"
                            id="type"
                            className="rounded-md border-2 text-sm focus:outline-none focus:ring-0"
                            defaultValue="any"
                        >
                            <option value="any" disabled>
                                Any
                            </option>
                            <option value="buy">Buy</option>
                            <option value="rent">Rent</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="property" className="font-medium">
                            Property
                        </label>
                        <select
                            name="property"
                            id="property"
                            className="rounded-md border-2 text-sm focus:outline-none focus:ring-0"
                            defaultValue="any"
                        >
                            <option value="any" disabled>
                                Any
                            </option>
                            <option value="house">House</option>
                            <option value="apartment">Apartment</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="minPrice" className="font-medium">
                            Min Price
                        </label>
                        <input
                            type="number"
                            name="minPrice"
                            id="minPrice"
                            min={0}
                            placeholder="Any"
                            className="rounded-md border-2 text-sm focus:outline-none focus:ring-0"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="maxPrice" className="font-medium">
                            Max Price
                        </label>
                        <input
                            type="number"
                            name="maxPrice"
                            id="maxPrice"
                            placeholder="Any"
                            min={0}
                            className="rounded-md border-2 text-sm focus:outline-none focus:ring-0"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="bedroom" className="font-medium">
                            Bedroom
                        </label>
                        <input
                            type="number"
                            name="bedroom"
                            id="bedroom"
                            min={1}
                            placeholder="Any"
                            className="rounded-md border-2 text-sm focus:outline-none focus:ring-0"
                        />
                    </div>
                </div>
                <button className="flex items-center justify-center gap-2 rounded-md bg-teal-600 px-8 py-2 text-base font-medium text-white">
                    <FaSearch />
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchOptions;
