import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const MessageBox = () => {
    const [showMessageBox, setShowMessageBox] = useState(true);

    return (
        <div
            className={`w-full rounded-md border-2 border-teal-600 bg-white ${showMessageBox ? "block" : "hidden"}`}
        >
            <div className="flex justify-between bg-teal-600 px-4 py-2">
                <div className="flex items-center gap-2">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_MgNJwDbfcqfAw3GQ81IZbipIHEo7yfrml8g6mtkz2d5SuYoZ"
                        alt="User Avatar"
                        className="h-8 w-8 flex-shrink-0 rounded-full object-cover"
                    />
                    <p className="text-sm font-semibold text-white">
                        Tom Holland
                    </p>
                </div>
                <button onClick={() => setShowMessageBox(!showMessageBox)}>
                    <FaTimes className="text-white transition-colors duration-300 hover:text-gray-300" />
                </button>
            </div>
            <ul className="flex h-[20rem] flex-col gap-4 overflow-y-auto px-4 py-6 scrollbar-thin">
                <li className="w-4/5 rounded-md bg-gray-200 px-3 py-2">
                    <p className="text-sm">
                        Hello, how are you today? I am looking for a house to
                        buy.
                    </p>
                    <span className="rounded-md bg-teal-300 px-2 text-xs">
                        1 hour ago
                    </span>
                </li>
                <li className="w-4/5 self-end rounded-md bg-teal-100 px-3 py-2">
                    <p className="text-sm">
                        Hello, how are you today? I am looking for a house to
                        buy.
                    </p>
                    <span className="rounded-md bg-teal-300 px-2 text-xs">
                        1 hour ago
                    </span>
                </li>
                <li className="w-4/5 self-end rounded-md bg-teal-100 px-3 py-2">
                    <p className="text-sm">
                        Hello, how are you today? I am looking for a house to
                        buy.
                    </p>
                    <span className="rounded-md bg-teal-300 px-2 text-xs">
                        1 hour ago
                    </span>
                </li>
            </ul>
            <div className="flex items-center gap-2 p-2 text-sm">
                <input
                    type="text"
                    placeholder="Type your message here..."
                    className="w-full rounded-md border-2 border-teal-600 px-4 py-2 text-sm focus:border-teal-600 focus:outline-none focus:ring-0"
                />
                <button className="rounded-md bg-teal-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-teal-700">
                    Send
                </button>
            </div>
        </div>
    );
};

export default MessageBox;
