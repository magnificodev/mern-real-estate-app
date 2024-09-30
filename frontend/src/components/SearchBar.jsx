import { useState } from "react";
import { propertyType } from "../data/propertyType";
import { useForm } from "react-hook-form";

const SearchBar = () => {
    const [transactionType, setTransactionType] = useState("buy");
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div>
            <div className="w-fit overflow-hidden rounded-t-2xl border-2 border-b-0 border-teal-600 bg-teal-600">
                <button
                    className={`rounded-t-xl px-6 py-2 transition-all duration-300 ${
                        transactionType === "buy" ? "bg-white" : "text-white"
                    }`}
                    onClick={() => setTransactionType("buy")}
                >
                    Buy
                </button>
                <button
                    className={`rounded-t-xl px-6 py-2 transition-all duration-300 ${
                        transactionType === "rent" ? "bg-white" : "text-white"
                    }`}
                    onClick={() => setTransactionType("rent")}
                >
                    Rent
                </button>
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4 rounded-b-2xl rounded-tr-2xl border-2 border-teal-600 p-4 text-gray-700 xl:flex-row"
            >
                <div className="-mx-8 grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col border-r-0 border-gray-300 px-8 md:border-r-2">
                        <label htmlFor="property" className="font-semibold">
                            Property
                        </label>
                        <select
                            id="property"
                            name="property"
                            className="border-none bg-transparent p-0 italic focus:outline-none focus:ring-0"
                        >
                            {propertyType.map((type) => (
                                <option key={type} value={type}>
                                    {type.charAt(0).toUpperCase() +
                                        type.slice(1).toLowerCase()}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="border-gray-300 px-8 lg:border-r-2">
                        <label htmlFor="location" className="font-semibold">
                            Location
                        </label>
                        <input
                            id="location"
                            name="location"
                            type="text"
                            className="w-full border-none bg-transparent p-0 italic focus:outline-none focus:ring-0"
                            placeholder="Eg. Ho Chi Minh City"
                        />
                    </div>
                    <div className="border-r-0 border-gray-300 px-8 md:border-r-2">
                        <label htmlFor="location" className="font-semibold">
                            Min Price
                        </label>
                        <input
                            id="minPrice"
                            name="minPrice"
                            type="number"
                            min={0}
                            className="w-full border-none bg-transparent p-0 italic focus:outline-none focus:ring-0"
                            placeholder="Min Price"
                        />
                    </div>
                    <div className="px-8">
                        <label htmlFor="location" className="font-semibold">
                            Max Price
                        </label>
                        <input
                            id="minPrice"
                            name="minPrice"
                            type="number"
                            min={0}
                            className="w-full border-none bg-transparent p-0 italic focus:outline-none focus:ring-0"
                            placeholder="Max Price"
                        />
                    </div>
                </div>
                <button className="rounded bg-teal-600 py-2 text-white lg:px-6 hover:bg-teal-700 transition-colors duration-300">
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
