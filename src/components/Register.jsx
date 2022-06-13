import React, { useState } from "react";
import { Login } from "./Login";

export const Register = () => {
  const [check, setCheck] = useState({});
  const [formData, setFormData] = useState({
    emailId: "",
    password: "",
    status: false,
    userName: "",
  });
  const [status, setStatus] = useState(true)
  const hadleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    console.log("Formdata", formData);
  };
  const handleSubmit = () => {
    setStatus(false)
    //   setFormData({})
    if (JSON.parse(localStorage.getItem("loginData")) === null) {
      localStorage.setItem("loginData", JSON.stringify(formData));
      console.log("null value");
    } else {
      let regesterData = JSON.parse(localStorage.getItem("loginData"));
      setCheck({ ...regesterData, status: true });
      console.log("Register data ", regesterData, "\n check : ", formData);
    }
  };
  const { userName, emailId, password } = formData;
  return (
    <div>
      {status ? (
        <>
          <div>
            <p>User Name : </p>
            <input
              onChange={hadleChange}
              type="text"
              name="userName"
              value={userName}
            />
          </div>
          <div>
            <p>Email Id : </p>
            <input
              onChange={hadleChange}
              type="text"
              name="emailId"
              value={emailId}
            />
          </div>
          <div>
            <p>Password </p>
            <input
              onChange={hadleChange}
              type="text"
              name="password"
              value={password}
            />
          </div>
          <div>
            <button onClick={handleSubmit}> Register </button>
          </div>
        </>
      ) : <Login/>}
    </div>
  );
};