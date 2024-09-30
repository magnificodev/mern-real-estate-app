import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const SearchMap = () => {
    return (
        <div className="overflow-hidden rounded-md lg:w-1/3 z-0">
            <MapContainer
                center={[51.505, -0.09]}
                zoom={13}
                scrollWheelZoom={true}
                className="h-[50vh] lg:h-[calc(100vh-5rem)] w-full"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        Example property location
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default SearchMap;
