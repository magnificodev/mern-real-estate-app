import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { Avatar } from "flowbite-react";

const Header = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const currentUser = useSelector((state) => state.user.currentUser);
    const isSignedIn = currentUser !== null;

    return (
        <header className="sticky top-0 z-10 border-b-2 border-gray-200 bg-white">
            <nav className="section-container flex h-20 items-center justify-between">
                <div className="flex items-center gap-12">
                    <h1 className="bg-gradient-to-br from-teal-500 to-teal-700 bg-clip-text text-3xl font-bold text-transparent">
                        <Link to="/">MagRE</Link>
                    </h1>
                    <ul className="hidden items-center gap-10 md:flex">
                        <li className="transition-all duration-100 hover:scale-105 hover:text-teal-700">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="transition-all duration-100 hover:scale-105 hover:text-teal-700">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="transition-all duration-100 hover:scale-105 hover:text-teal-700">
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li className="transition-all duration-100 hover:scale-105 hover:text-teal-700">
                            <Link to="/agents">Agents</Link>
                        </li>
                    </ul>
                </div>
                {isSignedIn ? (
                    <div className="flex items-center gap-4">
                        <Avatar
                            img={currentUser.avatar}
                            alt="avatar of Jese"
                            rounded
                        />
                        <p className="font-medium">{currentUser.username}</p>
                        <button className="relative hidden rounded-md bg-teal-600 px-6 py-2 text-white transition-all duration-300 hover:bg-teal-700 md:block">
                            <Link to="/profile">Profile</Link>
                            <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-sm font-semibold">
                                1
                            </span>
                        </button>
                    </div>
                ) : (
                    <div className="flex h-full w-1/3 items-center justify-end gap-4">
                        <button className="hidden px-6 py-2 transition-all duration-100 hover:scale-105 hover:text-teal-700 md:block">
                            <Link to="/sign-in">Sign in</Link>
                        </button>
                        <button className="hidden rounded-md bg-teal-600 px-6 py-2 text-white transition-all duration-300 hover:scale-105 hover:bg-teal-700 md:block">
                            <Link to="/sign-up">Sign up</Link>
                        </button>
                    </div>
                )}

                <button
                    className="relative z-10 block rounded-full bg-[#001F3F] p-2 text-white md:hidden"
                    onClick={() => setShowSidebar((prev) => !prev)}
                >
                    {showSidebar ? <FiX size={28} /> : <FiMenu size={28} />}
                </button>
                <Sidebar showSidebar={showSidebar} />
            </nav>
        </header>
    );
};

export default Header;
