import React from "react";
import { Button } from "flowbite-react";
import { AiFillGoogleCircle } from "react-icons/ai";

const GoogleAuth = () => {
    return (
        <Button outline gradientMonochrome="teal">
            <span className="flex items-center gap-2">
                <AiFillGoogleCircle size={24} />
                Continue with Google
            </span>
        </Button>
    );
};

export default GoogleAuth;
