import React from "react";
import { Button } from "flowbite-react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useAppContext } from "../contexts/AppContext";
import { useMutation } from "@tanstack/react-query";
import { googleAuth } from "../api/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSignedIn } from "../redux/user/userSlice";

const GoogleAuth = () => {
    const { showToast } = useAppContext();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { mutate } = useMutation({
        mutationFn: googleAuth,
        onSuccess: (data) => {
            dispatch(userSignedIn(data.data.user));
            navigate("/");
            showToast({ type: data.status, message: data.message });
        },
    });

    const handleGoogleClick = async () => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: "select_account" });
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log(user)
            mutate({
                name: user.displayName,
                email: user.email,
                googlePhotoUrl: user.photoURL,
            });
        } catch (err) {
            showToast({
                type: "error",
                message: err.message,
            });
        }
    };

    return (
        <Button outline gradientMonochrome="teal" onClick={handleGoogleClick}>
            <span className="flex items-center gap-2">
                <AiFillGoogleCircle size={24} />
                Continue with Google
            </span>
        </Button>
    );
};

export default GoogleAuth;
