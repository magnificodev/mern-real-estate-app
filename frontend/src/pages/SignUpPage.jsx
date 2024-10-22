import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextInput, Label, Button, Alert, Spinner } from "flowbite-react";
import GoogleAuth from "../components/GoogleAuth";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import {
    usernameValidationObj,
    emailValidationObj,
    passwordValidationObj,
} from "../validators/FormValidation";
import { signUp } from "../api/auth";
import { useAppContext } from "../contexts/AppContext";

function SignUpPage() {
    const { showToast } = useAppContext();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { mutate, error, isError, isPending } = useMutation({
        mutationFn: signUp,
        onSuccess: (data) => {
            showToast({ type: data.status, message: data.message });
            navigate("/sign-in");
        },
    });

    const onSubmit = (data) => {
        mutate(data);
    };

    return (
        <div className="mt-20 h-[calc(100vh-5rem)]">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 sm:flex-row">
                <div className="w-full">
                    <h1 className="bg-gradient-to-br from-teal-500 to-teal-700 bg-clip-text text-4xl font-bold text-transparent">
                        Real Estate App
                    </h1>
                    <p className="mt-2 text-sm font-light">
                        This is a demo project. You can sign up with your email
                        and password or with Google.
                    </p>
                </div>
                <div className="w-full space-y-4">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col gap-4"
                    >
                        <div>
                            <Label value="Your username" htmlFor="username" />
                            <TextInput
                                type="text"
                                id="username"
                                placeholder="example"
                                {...register("username", usernameValidationObj)}
                                color={errors.username && "failure"}
                                helperText={
                                    errors.username && (
                                        <>
                                            <span className="font-normal">
                                                {errors.username?.message}
                                            </span>
                                        </>
                                    )
                                }
                            />
                        </div>
                        <div>
                            <Label value="Your email" htmlFor="email" />
                            <TextInput
                                type="email"
                                id="email"
                                placeholder="example@gmail.com"
                                {...register("email", emailValidationObj)}
                                color={errors.email && "failure"}
                                helperText={
                                    errors.email && (
                                        <>
                                            <span className="font-normal">
                                                {errors.email?.message}
                                            </span>
                                        </>
                                    )
                                }
                            />
                        </div>
                        <div>
                            <Label value="Your password" htmlFor="password" />
                            <TextInput
                                type="password"
                                id="password"
                                placeholder="******"
                                {...register("password", passwordValidationObj)}
                                color={errors.password && "failure"}
                                helperText={
                                    errors.password && (
                                        <>
                                            <span className="font-normal">
                                                {errors.password?.message}
                                            </span>
                                        </>
                                    )
                                }
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={isPending}
                        >
                            {isPending ? (
                                <>
                                    <Spinner size="sm" />
                                    <span className="ml-2">Signing up...</span>
                                </>
                            ) : (
                                "Sign up"
                            )}
                        </Button>
                        <GoogleAuth />
                    </form>
                    <p className="text-sm">
                        You already have an account?{" "}
                        <Link
                            to={"/sign-in"}
                            className="font-medium text-teal-700 hover:underline"
                        >
                            Sign in
                        </Link>{" "}
                    </p>
                    {isError && <Alert color="failure">{error.message}</Alert>}
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;
