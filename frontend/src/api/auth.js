import axios from "axios";

export const signUp = async (data) => {
    try {
        const response = await axios.post("/api/v1/auth/signup", data);

        if (response.data.status === "failure") {
            throw new Error(response.data.message);
        }

        return response.data;
    } catch (err) {
        if (err.response) {
            throw new Error(err.response.data.message);
        } else {
            throw new Error(err.message);
        }
    }
};

export const signIn = async (data) => {
    try {
        const response = await axios.post("/api/v1/auth/signin", data);

        if (response.data.status === "failure") {
            throw new Error(response.data.message);
        }

        return response.data;
    } catch (err) {
        if (err.response) {
            throw new Error(err.response.data.message);
        } else {
            throw new Error(err.message);
        }
    }
};

export const googleAuth = async (data) => {
    try {
        const response = await axios.post("/api/v1/auth/google-auth", data);

        if (response.data.status === "failure") {
            throw new Error(response.data.message)
        }

        return response.data
    } catch (err) {
        if (err.response) {
            throw new Error(err.response.data.message);
        } else {
            throw new Error(err.message);
        }
    }
};

export const signOut = async () => {
    try {
        const response = await axios.post("/api/v1/auth/signout");

        if (response.data.status === "failure") {
            throw new Error(response.data.message);
        }

        return response.data;
    } catch (err) {
        if (err.response) {
            throw new Error(err.response.data.message);
        } else {
            throw new Error(err.message);
        }
    }
};
