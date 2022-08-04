import React, { useEffect } from "react";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Lottie from "react-lottie";
import login from '../../assests/login.json'

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: login,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    const errorMsg = error || gError;
    if (errorMsg) {
      switch (errorMsg?.code) {
        case "auth/invalid-email":
          toast("Invalid email provided, please provide a valid email");
          break;

        case "auth/invalid-password":
          toast("Wrong password. Intruder!!");
          break;

        case "auth/wrong-password":
          toast("Wrong Password");
          break;

        case "auth/user-not-found":
          toast("User Not Found");
          break;

        default:
          toast("something went wrong");
      }
    }
  }, [error, gError]);

  if (loading || gLoading) {
    return <h2>Loading...</h2>;
  }

  const onSubmit = (data) => {
    // console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
    // reset({});
  };



  return (
    <>
      <div className="d-flex col justify-content-center align-items-center flex-sm-column flex-lg-row flex-md-column mt-5">
        <div className="d-flex row justify-content-center align-items-center mb-3 mx-5">
          <Lottie
            className="mx-3 mb-3"
            options={defaultOptions}
            height={600}
            width={600}
          />
        </div>
        <div className="login border-0 my-5 mt-5">
          <div className="my-5 p-4 text-center w-full border-1 shadow-lg mx-auto my-3 d-flex justify-content-center align-item-center mt-5">
            <div className="flex h-screen justify-center items-center border-0">
              <div className="card border-0">
                <div className="card-body border-0">
                  <h2 className="text-center text-success">Login</h2>
                  <form className="border-0" onSubmit={handleSubmit(onSubmit)}>
                    {/* Email */}
                    <div className="form-control w-full border-0">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        {...register("email", {
                          required: {
                            value: true,
                            message: "Email is Required",
                          },
                          pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: "Provide a valid Email",
                          },
                        })}
                        type="email"
                        placeholder="Your Email"
                        className="form-control w-full mx-auto"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        for="exampleInputEmail1"
                      />
                      <label className="label">
                        {errors.email?.type === "required" && (
                          <span className="label-text-alt text-red-600">
                            {errors.email.message}
                          </span>
                        )}
                        {errors.email?.type === "pattern" && (
                          <span className="label-text-alt text-red-600">
                            {errors.email.message}
                          </span>
                        )}
                      </label>
                    </div>

                    {/* Password */}
                    <div className="form-control w-full border-0">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input
                        {...register("password", {
                          required: {
                            value: true,
                            message: "Password is Required",
                          },
                          minLength: {
                            value: 6,
                            message: "Must be 6 characters or longer",
                          },
                        })}
                        type="password"
                        placeholder="Password"
                        className="form-control w-full mx-auto"
                        id="exampleInputPassword1"
                      />
                      <label className="label">
                        {errors.password?.type === "required" && (
                          <span className="label-text-alt text-red-600">
                            {errors.password.message}
                          </span>
                        )}
                        {errors.password?.type === "minLength" && (
                          <span className="label-text-alt text-red-600">
                            {errors.password.message}
                          </span>
                        )}
                      </label>
                    </div>
                    <input
                      className="btn btn-primary px-4 mb-3"
                      type="submit"
                      value="Login"
                    />
                  </form>
                  <p>
                    <small className="fs-5">
                      New To Ticket-Kato?
                      <Link
                        className="text-primary mx-2 text-decoration-none"
                        to="/signup"
                      >
                        Create New Account
                      </Link>
                    </small>
                  </p>
                  <div class="divider">
                    <span></span>
                    <span>OR</span>
                    <span></span>
                  </div>
                  <div className="mt-4">
                    <button
                      onClick={() => signInWithGoogle()}
                      className="btn btn-outline-success "
                    >
                      Continue With Google{" "}
                      <FcGoogle className="w-6 h-7 ml-3"></FcGoogle>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
