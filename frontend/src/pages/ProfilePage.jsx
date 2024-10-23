import React from "react";
import { listData } from "../data/dummyData";
import RealEstateItem from "../components/RealEstateItem";
import MessageBox from "../components/MessageBox";
import { useSelector, useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { signOut } from "../api/auth";
import { useAppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import { userSignedOut } from "../redux/user/userSlice";
import { Spinner } from "flowbite-react";

const ProfilePage = () => {
    const currentUser = useSelector((state) => state.user.currentUser);
    const { showToast } = useAppContext();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { mutate: signOutMutate, isPending: isSigningOut } = useMutation({
        mutationFn: signOut,
        onSuccess: (data) => {
            dispatch(userSignedOut());
            navigate("/");
            showToast({ type: data.status, message: data.message });
        },
    });

    return (
        <div className="section-container flex flex-col gap-8 py-10 lg:flex-row">
            <div className="space-y-8 lg:w-2/3">
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-semibold">
                            User Information
                        </h1>
                        <button className="rounded-md bg-teal-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-teal-700">
                            Update Profile
                        </button>
                    </div>
                    <div className="space-y-2">
                        <p className="flex items-center gap-2">
                            Avatar:
                            <img
                                src={currentUser.avatar}
                                alt="User Avatar"
                                className="h-10 w-10 rounded-full object-cover"
                            />
                        </p>
                        <p>
                            Username:{" "}
                            <span className="font-medium">
                                {currentUser.username}
                            </span>
                        </p>
                        <p>
                            Email:{" "}
                            <span className="font-medium">
                                {currentUser.email}
                            </span>
                        </p>
                        <button
                            className="rounded-md bg-teal-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-teal-700"
                            onClick={signOutMutate}
                            disabled={isSigningOut}
                        >
                            {isSigningOut ? (
                                <>
                                    <Spinner size="sm" />
                                    <span className="ml-2">Signing out...</span>
                                </>
                            ) : (
                                "Sign out"
                            )}
                        </button>
                    </div>
                </div>
                <div className="space-y-8">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-semibold">My List</h1>
                        <button className="rounded-md bg-teal-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-teal-700">
                            Add New Post
                        </button>
                    </div>
                    <ul className="flex h-[40rem] flex-col gap-4 overflow-y-auto scrollbar-thin">
                        {listData.map((item) => (
                            <RealEstateItem key={item.id} item={item} />
                        ))}
                    </ul>
                </div>
            </div>
            <div className="h-[calc(100vh-5rem)] rounded-xl border-2 border-teal-300 p-4 lg:w-1/3">
                <div className="relative h-full space-y-4 overflow-hidden">
                    <h1 className="text-2xl font-semibold">Messages</h1>
                    <ul className="flex h-full flex-col gap-4 overflow-y-auto scrollbar-thin">
                        <li className="flex items-center gap-3 rounded-md bg-gray-200 px-4 py-2 transition-colors hover:bg-gray-300">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_MgNJwDbfcqfAw3GQ81IZbipIHEo7yfrml8g6mtkz2d5SuYoZ"
                                alt="User Avatar"
                                className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                            />
                            <div>
                                <p className="font-semibold">Tom Holland</p>
                                <p className="line-clamp-1">
                                    Hello, how are you today? I am looking for a
                                    house to buy.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-center gap-3 rounded-md bg-gray-200 px-4 py-2">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_MgNJwDbfcqfAw3GQ81IZbipIHEo7yfrml8g6mtkz2d5SuYoZ"
                                alt="User Avatar"
                                className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                            />
                            <div>
                                <p className="font-semibold">Tom Holland</p>
                                <p className="line-clamp-1">
                                    Hello, how are you today? I am looking for a
                                    house to buy.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-center gap-3 rounded-md bg-gray-200 px-4 py-2">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_MgNJwDbfcqfAw3GQ81IZbipIHEo7yfrml8g6mtkz2d5SuYoZ"
                                alt="User Avatar"
                                className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                            />
                            <div>
                                <p className="font-semibold">Tom Holland</p>
                                <p className="line-clamp-1">
                                    Hello, how are you today? I am looking for a
                                    house to buy.
                                </p>
                            </div>
                        </li>
                    </ul>
                    <div className="absolute bottom-0 w-full md:fixed md:bottom-4 md:right-4 md:w-96">
                        <MessageBox />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
