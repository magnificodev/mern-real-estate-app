import { Link } from "react-router-dom";

const Sidebar = ({ showSidebar }) => {
    console.log(showSidebar);
    return (
        <div
            className={`fixed right-0 top-0 flex h-screen w-80 ${showSidebar ? "translate-x-0" : "translate-x-full"} items-center justify-center bg-[#001F3F] transition-all duration-700 ease-in-out ${showSidebar ? "translate-x-0" : ""}`}
        >
            <ul className="flex flex-1 flex-col items-center">
                <li className="py-4 text-white transition-all duration-100 hover:scale-105">
                    <Link to="/">Home</Link>
                </li>
                <li className="py-4 text-white transition-all duration-100 hover:scale-105">
                    <Link to="/about">About</Link>
                </li>
                <li className="py-4 text-white transition-all duration-100 hover:scale-105">
                    <Link to="/contact">Contact</Link>
                </li>
                <li className="py-4 text-white transition-all duration-100 hover:scale-105">
                    <Link to="/agents">Agents</Link>
                </li>
                <li className="py-4 text-white transition-all duration-100 hover:scale-105">
                    <Link to="/sign-in">Sign in</Link>
                </li>
                <li className="py-4 text-white transition-all duration-100 hover:scale-105">
                    <Link to="/sign-up">Sign up</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
