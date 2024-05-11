import React, { useState } from "react";
import "./Home.css";
import { schema } from "../schemas";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [userRegistation, setuserRegistation] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    mobileNo: "",
    password: "",
    gender: "",
  });

  const [showPassword, setShowPassword] = useState(true);

  const navigate = useNavigate();

  const [error, setError] = useState("");

  let name, value;
  const handlerInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setuserRegistation({ ...userRegistation, [name]: value });
  };

  const handlePassword = () => {
      setShowPassword(!showPassword);
      setTimeout(() => {
          setShowPassword(showPassword)
      },500)
   
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await schema.validate(userRegistation, { abortEarly: false });
      // toast("Submit Successfully")
      alert("successfully");
      navigate("/Secondpage");
      setuserRegistation({
        firstName: "",
        lastName: "",
        emailId: "",
        mobileNo: "",
        password: "",
        gender: "",
      });
    } catch (error) {
      toast("Please the provide the data");
      const newError = {};
      error.inner.forEach((err) => {
        newError[err.path] = err.message;
      });

      setError(newError);
      console.log(error);
    }
  };
  return (
    <>
      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          {/* <img src="" /> */}
          <form onSubmit={onSubmit} validationschema={schema}>
            <div className="formbold-form-title">
              <h2 className="">Make your Portfolio now</h2>
              <p>
                Fill your details and make your portfolio easily and simple.
              </p>
            </div>

            <div className="formbold-input-flex">
              <div className="input-box">
                <label htmlFor="firstname" className="formbold-form-label">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  id="firstname"
                  onChange={handlerInput}
                  placeholder="First Name"
                  value={userRegistation.firstName}
                />
                {error.firstName && (
                  <div className="error">{error.firstName}</div>
                )}
              </div>

              <div>
                <label htmlFor="lastname" className="formbold-form-label">
                  Last Name
                </label>
                <input
                  type="lastname"
                  className="form-control"
                  id="lastname"
                  name="lastName"
                  onChange={handlerInput}
                  placeholder="Last Name"
                  value={userRegistation.lastName}
                />
                {error.lastName && (
                  <div className="error">{error.lastName}</div>
                )}
              </div>
            </div>

            <div className="formbold-input-flex">
              <div>
                <label htmlFor="email" className="formbold-form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="emailId"
                  onChange={handlerInput}
                  placeholder="Email"
                  value={userRegistation.emailId}
                />
                {error.emailId && <div className="error">{error.emailId}</div>}
              </div>

              <div>
                <label htmlFor="phone" className="formbold-form-label">
                  Mobile number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="number"
                  name="mobileNo"
                  onChange={handlerInput}
                  value={userRegistation.mobileNo}
                  placeholder="Phone Number"
                />
                {error.mobileNo && (
                  <div className="error">{error.mobileNo}</div>
                )}
              </div>
            </div>
            <div className="formbold-mb-3">
              <label className="formbold-form-label">Password</label>
              <span className="formbold">
                <input
                  type={showPassword ? "password" : "text"}
                  name="password"
                  id="password"
                  className="form-control"
                  value={userRegistation.password}
                  onChange={handlerInput}
                  placeholder="password"
                />
                {showPassword ? (
                  <i onClick={handlePassword} class="fa-regular fa-eye"></i>
                ) : (
                  <i onClick={handlePassword} class="fa-regular fa-eye-slash"></i>
                )}
              </span>

              {error.gender && <div className="error">{error.gender}</div>}
            </div>

            <div className="formbold-mb-3">
              <label className="formbold-form-label">Gender</label>
              <select
                className="custom-select"
                name="gender"
                id="occupation"
                value={userRegistation.gender}
                onChange={handlerInput}
              >
                <option selected value="select">
                  Select
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Transgender">Transgender</option>
              </select>
              {error.gender && <div className="error">{error.gender}</div>}
            </div>

            <div className="formbold-checkbox-wrapper">
              <label
                htmlFor="supportCheckbox"
                className="formbold-checkbox-label"
              >
                <div className="formbold-relative">
                  <input
                    type="checkbox"
                    id="supportCheckbox"
                    checked
                    className="formbold-input-checkbox"
                  />
                  <div className="formbold-checkbox-inner">
                    <span className="formbold-opacity-0">
                      <svg
                        width="11"
                        height="8"
                        viewBox="0 0 11 8"
                        fill="none"
                        className="formbold-stroke-current"
                      >
                        <path
                          d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                          // stroke-width="0.4"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
                I agree to the defined terms, conditions, and policies
              </label>
            </div>
            <button className="formbold-btn">Register Now</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
