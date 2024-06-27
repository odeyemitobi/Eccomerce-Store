import React, { useState } from "react";
import { CustomModal } from "../../../components/Modals/AuthModal";
import Box from "@mui/material/Box";
import { FaRegQuestionCircle } from "react-icons/fa";
import {
  IoIosEyeOff,
  IoMdEye,
  IoIosCheckmarkCircle,
  IoIosCloseCircle,
} from "react-icons/io";
import CreateBtn from "../../../components/button/CreateBtn";

export const AuthComponent = () => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <CustomModal open={true} handleClose={() => {}}>
      {isLogin ? (
        <Login toggleAuthMode={toggleAuthMode} />
      ) : (
        <AccountCreation toggleAuthMode={toggleAuthMode} />
      )}
    </CustomModal>
  );
};

export const AccountCreation = ({ toggleAuthMode }) => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(null);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);

  const [open, setOpen] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(false);

  const passtoggle = () => {
    setOpen(!open);
  };

  const handleNameChange = (e) => {
    const { value } = e.target;

    if (value.trim() !== "") {
      const nameRegex = /^[a-zA-Z\s]+$/;
      if (nameRegex.test(value)) {
        setName(value);
        setNameError("");
      } else {
        setNameError("Please enter only alphabets");
      }
    } else {
      setName("");
      setNameError(null);
    }
  };

  const handleNameInvalid = (e) => {
    e.target.setCustomValidity("Please enter only alphabets");
  };

  const handleEmail = (e) => {
    const { value } = e.target;
    setEmail(value);

    if (value.trim() !== "") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setEmailError("Please enter a valid email address");
      } else {
        setEmailError(null);
      }
    } else {
      setEmailError(null);
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(value)) {
      setPasswordError(
        "Password must be at least 8 characters long and contain at least one letter and one number"
      );
    } else {
      setPasswordError(null);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setPasswordMatch(value === password);
  };

  const handleRegister = () => {
    if (name.trim() === "") {
      setNameError("Please enter your name");
    } else if (email.trim() === "") {
      setEmailError("Please enter your email");
    } else if (password.trim() === "") {
      alert("Please enter your password");
    } else if (confirmPassword.trim() === "") {
      alert("Please confirm your password");
    } else if (!passwordMatch) {
      alert("Passwords do not match");
    } else {
      alert("Registration successful");
    }
  };

  return (
    <Box className="w-full py-5 px-8 bg-black text-white">
      <Box className="my-6">
        <h1 className="text-center text-2xl font-semibold text-white">
          Welcome
        </h1>
        <p className="text-center text-sm mt-2 text-white">
          Please create an account below to continue.
        </p>
      </Box>
      <Box className="md:flex grid md:space-x-4 mb-4">
        <div className="w-full md:mb-0 mb-4">
          <label className="text-sm" htmlFor="name">
            Name*
          </label>
          <div className="relative">
            <input
              className="w-full p-3 bg-transparent border outline-none border-gray-300 border-opacity-25 rounded-lg"
              type="text"
              placeholder="Enter your name"
              id="name"
              value={name}
              onChange={handleNameChange}
              onInvalid={handleNameInvalid}
              pattern="^[a-zA-Z\s]+$"
              required
            />
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <FaRegQuestionCircle color="#98A2B3" />
            </span>
          </div>
          {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
        </div>
        <div className="w-full">
          <label className="text-sm" htmlFor="email">
            Email*
          </label>
          <div className="relative">
            <input
              className={`w-full p-3 bg-transparent border outline-none border-gray-300 border-opacity-25 rounded-lg ${
                emailError ? "border-red-500 border-2" : ""
              }`}
              type="email"
              placeholder="Enter email"
              id="email"
              value={email}
              onChange={handleEmail}
            />
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <FaRegQuestionCircle color="#98A2B3" />
            </span>
          </div>
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
        </div>
      </Box>
      <Box className="md:flex grid md:space-x-4 md:mb-5 mb-7">
        <div className="w-full md:mb-0 mb-4">
          <label className="text-sm" htmlFor="password">
            Password*
          </label>
          <div className="relative">
            <input
              className={`w-full p-3 bg-transparent border outline-none border-gray-300 border-opacity-25 rounded-lg ${
                passwordError ? "border-red-500" : ""
              }`}
              type={open === false ? "password" : "text"}
              placeholder="Enter Password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <span className="absolute cursor-pointer right-2 top-1/2 transform -translate-y-1/2">
              {open === false ? (
                <IoMdEye size={20} color="#50555C" onClick={passtoggle} />
              ) : (
                <IoIosEyeOff size={20} color="#50555C" onClick={passtoggle} />
              )}
            </span>
          </div>
          {passwordError && (
            <p className="text-red-500 text-sm">{passwordError}</p>
          )}
        </div>
        <div className="w-full">
          <label className="text-sm" htmlFor="confirmPassword">
            Confirm Password*
          </label>
          <div className="relative">
            <input
              className="w-full p-3 bg-transparent border outline-none border-gray-300 border-opacity-25 rounded-lg"
              type="password"
              placeholder="Enter Password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600">
              {passwordMatch ? (
                <IoIosCheckmarkCircle color="#1AEC94" />
              ) : confirmPassword.length > 0 ? (
                <IoIosCloseCircle color="#FF3B30" />
              ) : (
                <IoIosCloseCircle color="#FF3B30" />
              )}
            </span>
          </div>
        </div>
      </Box>
      <Box className="mb-4 mt-9 text-center justify-center">
        <div className="" onClick={handleRegister}>
          <CreateBtn>Create Account</CreateBtn>
        </div>
      </Box>
      <Box className="text-center flex justify-center gap-2">
        <p className="text-gray-400">Already have an account?</p>
        <p
          className="font-bold cursor-pointer text-gray-400"
          onClick={toggleAuthMode}
        >
          Login
        </p>
      </Box>
    </Box>
  );
};

export const Login = ({ toggleAuthMode }) => {
  return (
    <Box className="w-full py-5 px-8 bg-black text-white">
      <Box className="my-6">
        <h1 className="text-center text-2xl font-semibold text-white">
          Login
        </h1>
        <p className="text-center text-sm mt-2 text-white">
          Please log in to continue.
        </p>
      </Box>
      <Box className="text-center flex justify-center gap-2">
        <p className="text-gray-400">Don't have an account?</p>
        <p
          className="font-bold cursor-pointer text-gray-400"
          onClick={toggleAuthMode}
        >
          Create Account
        </p>
      </Box>
    </Box>
  );
};
