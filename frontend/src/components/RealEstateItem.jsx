import React from "react";
import {
    FaMapMarkerAlt,
    FaBed,
    FaBath,
    FaRegBookmark,
    FaRegComment,
} from "react-icons/fa";

const RealEstateItem = ({ item }) => {
    const formatBedroomText = (count) => `${count} ${count > 1 ? 'bedrooms' : 'bedroom'}`;
    const formatBathroomText = (count) => `${count} ${count > 1 ? 'bathrooms' : 'bathroom'}`;

    return (
        <li className="flex flex-col sm:flex-row gap-4 rounded-2xl border-2 border-teal-600 p-4 text-gray-700 hover:shadow-lg transition-shadow duration-300">
            <img
                src={item.img}
                alt={item.title}
                className="aspect-[4/3] w-full sm:w-1/3 rounded-xl object-cover"
            />
            <div className="flex w-full sm:w-2/3 flex-col justify-between gap-4">
                <h1 className="line-clamp-2 text-lg sm:text-xl font-semibold text-teal-700">
                    {item.title}
                </h1>
                <span className="flex items-center gap-1 text-xs sm:text-sm text-gray-500">
                    <FaMapMarkerAlt className="text-teal-600" />
                    {item.address}
                </span>
                <span className="w-fit rounded-md bg-teal-300 px-3 py-1 text-lg sm:text-xl font-semibold text-gray-700">
                    ${item.price.toLocaleString()}
                </span>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                        <span className="flex items-center gap-1 rounded-md bg-gray-200 px-2 py-1 text-xs sm:text-sm">
                            <FaBed className="text-teal-600" />
                            {formatBedroomText(item.bedroom)}
                        </span>
                        <span className="flex items-center gap-1 rounded-md bg-gray-200 px-2 py-1 text-xs sm:text-sm">
                            <FaBath className="text-teal-600" />
                            {formatBathroomText(item.bathroom)}
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="rounded-md border-2 border-teal-600 p-2 text-teal-600 hover:bg-teal-600 hover:text-white transition-colors duration-300">
                            <FaRegBookmark />
                        </button>
                        <button className="rounded-md border-2 border-teal-600 p-2 text-teal-600 hover:bg-teal-600 hover:text-white transition-colors duration-300">
                            <FaRegComment />
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default RealEstateItem;
