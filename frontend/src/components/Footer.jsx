import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="border-t-2 border-teal-600">
            <div className="section-container space-y-8 p-8 lg:space-y-12">
                <h1 className="bg-gradient-to-br from-teal-500 to-teal-700 bg-clip-text text-center text-3xl font-bold text-transparent sm:text-left">
                    <a href="/">MagRE</a>
                </h1>
                <div className="flex flex-col flex-wrap items-center justify-between gap-8 sm:flex-row">
                    <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8">
                        <a
                            href="#"
                            className="hover:text-teal-600 hover:underline"
                        >
                            Terms & Conditions
                        </a>
                        <a
                            href="#"
                            className="hover:text-teal-600 hover:underline"
                        >
                            Privacy Policy
                        </a>
                    </div>
                    <p className="self-center text-center text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} Real Estate. All
                        rights reserved.
                    </p>
                    <div className="flex items-center gap-8 self-center">
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
            </div>
        </footer>
    );
};

export default Footer;
