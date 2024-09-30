import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import {
    FaMapMarkerAlt,
    FaUikit,
    FaRegBookmark,
    FaRegComment,
} from "react-icons/fa";
import { listData } from "../data/dummyData";
import "leaflet/dist/leaflet.css";

const item = listData[0];

const RealEstateDetailPage = () => {
    return (
        <div className="section-container flex flex-col gap-8 lg:flex-row">
            {/* LEFT SIDE */}
            <div className="min-h-screen space-y-8 lg:w-2/3">
                <div className="flex flex-col gap-4 md:flex-row">
                    <img
                        src={item.img}
                        alt={item.title}
                        className="h-[16rem] rounded-xl object-cover md:h-[22rem] md:w-3/4"
                    />
                    <div className="grid h-[6rem] grid-cols-3 grid-rows-1 gap-4 md:h-[22rem] md:w-1/4 md:grid-cols-1 md:grid-rows-3">
                        <img
                            src={item.img}
                            alt={item.title}
                            className="h-full w-full rounded-xl object-cover"
                        />
                        <img
                            src={item.img}
                            alt={item.title}
                            className="h-full w-full rounded-xl object-cover"
                        />
                        <img
                            src={item.img}
                            alt={item.title}
                            className="h-full w-full rounded-xl object-cover"
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-between gap-4 sm:flex-row">
                    <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
                        <h1
                            className="line-clamp-2 text-xl font-semibold text-teal-700 md:text-2xl"
                            title={item.title}
                        >
                            {item.title}
                        </h1>
                        <p className="flex items-center gap-1 text-sm text-gray-500 md:text-base">
                            <FaMapMarkerAlt className="text-teal-600" />
                            {item.address}
                        </p>
                        <p className="w-fit rounded-md bg-teal-300 px-3 py-1 text-lg font-semibold text-gray-700 md:text-xl">
                            ${item.price.toLocaleString()}
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 self-center rounded-md bg-gray-300 px-8 py-4 text-center">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFs8K_08NO4B4HBktgGvFfwT8T9Tf-ojKs7Q&s"
                            alt={item.title}
                            className="h-12 w-12 rounded-full object-cover md:h-16 md:w-16"
                        />
                        <p className="text-sm font-semibold">John Doe</p>
                    </div>
                </div>
                <p className="text-sm md:text-base text-center sm:text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quos. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Iusto vitae aliquid dolorum harum ratione
                    delectus quasi quas enim non, quod dignissimos quidem alias
                    praesentium, molestiae possimus assumenda ipsa repellat?
                    Similique.
                </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="min-h-screen space-y-6 rounded-xl lg:w-1/3">
                <div className="space-y-4">
                    <h1 className="text-lg font-semibold">General</h1>
                    <div className="flex flex-wrap lg:flex-nowrap lg:flex-col gap-2">
                        <div className="flex items-center gap-4 rounded-xl bg-gray-300 px-4 py-2">
                            <FaUikit />
                            <div>
                                <h3 className="font-medium">Utilities</h3>
                                <p>Renter is responsible</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 rounded-xl bg-gray-300 px-4 py-2">
                            <FaUikit />
                            <div>
                                <h3 className="font-medium">Utilities</h3>
                                <p>Renter is responsible</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 rounded-xl bg-gray-300 px-4 py-2">
                            <FaUikit />
                            <div>
                                <h3 className="font-medium">Utilities</h3>
                                <p>Renter is responsible</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <h1 className="text-lg font-semibold">Room Sizes</h1>
                    <div className="flex flex-wrap gap-2">
                        <span className="flex items-center gap-2 rounded-md bg-gray-300 px-2 py-1">
                            <FaUikit />
                            80spm (861sqft)
                        </span>
                        <span className="flex items-center gap-2 rounded-md bg-gray-300 px-2 py-1">
                            <FaUikit />2 Beds
                        </span>
                        <span className="flex items-center gap-2 rounded-md bg-gray-300 px-2 py-1">
                            <FaUikit />1 bathroom
                        </span>
                    </div>
                </div>
                <div className="space-y-4">
                    <h1 className="text-lg font-semibold">Nearby Places</h1>
                    <div className="flex flex-wrap gap-2">
                        <div className="flex items-center gap-4 rounded-xl bg-gray-300 px-4 py-2">
                            <FaUikit />
                            <div>
                                <h3 className="font-medium">School</h3>
                                <p>200m away</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 rounded-xl bg-gray-300 px-4 py-2">
                            <FaUikit />
                            <div>
                                <h3 className="font-medium">Bus stop</h3>
                                <p>100m away</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 rounded-xl bg-gray-300 px-4 py-2">
                            <FaUikit />
                            <div>
                                <h3 className="font-medium">Restaurant</h3>
                                <p>200m away</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <h1 className="text-lg font-semibold">Location</h1>
                    <div className="w-full overflow-hidden rounded-md">
                        <MapContainer
                            center={[51.505, -0.09]}
                            zoom={13}
                            scrollWheelZoom={true}
                            className="h-[14rem] lg:h-[10rem] w-full"
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[51.505, -0.09]}>
                                <Popup>Example property location</Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <button className="flex items-center gap-2 rounded-md border-2 border-teal-600 p-2 text-teal-600 transition-colors duration-300 hover:bg-teal-600 hover:text-white">
                        <FaRegComment /> Send Message
                    </button>
                    <button className="flex items-center gap-2 rounded-md border-2 border-teal-600 p-2 text-teal-600 transition-colors duration-300 hover:bg-teal-600 hover:text-white">
                        <FaRegBookmark /> Save the Price
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RealEstateDetailPage;
