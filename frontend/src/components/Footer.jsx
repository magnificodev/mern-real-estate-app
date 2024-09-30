import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="section-container mt-8 space-y-12 border-t-2 border-teal-700 p-8">
            <h1 className="bg-gradient-to-br from-teal-500 to-teal-700 bg-clip-text text-3xl font-bold text-transparent">
                <a href="/">MagRE</a>
            </h1>
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <div className="flex items-center gap-8 font-medium">
                    <a href="#" className="hover:text-teal-600 hover:underline">
                        Terms & Conditions
                    </a>
                    <a href="#" className="hover:text-teal-600 hover:underline">
                        Privacy Policy
                    </a>
                </div>
                <p className="self-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Real Estate. All rights
                    reserved.
                </p>
                <div className="flex items-center gap-8">
                    <a href="#">
                        <FaFacebookF className="text-2xl text-gray-500 transition-all duration-300 hover:text-teal-600" />
                    </a>
                    <a href="#">
                        <FaInstagram className="text-2xl text-gray-500 transition-all duration-300 hover:text-teal-600" />
                    </a>
                    <a href="#">
                        <FaTwitter className="text-2xl text-gray-500 transition-all duration-300 hover:text-teal-600" />
                    </a>
                    <a href="#">
                        <FaLinkedinIn className="text-2xl text-gray-500 transition-all duration-300 hover:text-teal-600" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
