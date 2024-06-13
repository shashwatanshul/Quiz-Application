import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, getAllUsers } from "../actions/userActions";
import { getAllSchoolcodes } from "../actions/schoolcodeActions";
import Error from "../components/Error";
import Success from "../components/Success";
import Loading from "../components/Loading";

export default function Registerscreen() {
  const [name, setname] = useState("");
  const [school, setschool] = useState("");
  const [schoolcode, setschoolcode] = useState("");
  const [classs, setclasss] = useState("");
  const [city, setcity] = useState("");
  const [mobile, setmobile] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [registrationType, setRegistrationType] = useState("schoolCode");
  const [isAllFieldsFilled, setIsAllFieldsFilled] = useState(false);
  const [isSchoolCodeValid, setIsSchoolCodeValid] = useState(true); // Initialize to true
  const users = useSelector((state) => state.getAllUsersReducer.users);
  const registerstate = useSelector((state) => state.registerUserReducer);
  const { error, loading, success } = registerstate;
  const schoolcodes = useSelector(
    (state) => state.getAllSchoolcodesReducer.schoolcodes
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSchoolcodes());
    dispatch(getAllUsers()); // Fetch all users from the database
  }, [dispatch]);

  useEffect(() => {
    const allFieldsFilled =
      name !== "" &&
      classs !== "" &&
      city !== "" &&
      mobile !== "" &&
      email !== "" &&
      password !== "" &&
      cpassword !== "" &&
      (registrationType === "schoolCode" ? schoolcode !== "" : true);
    setIsAllFieldsFilled(allFieldsFilled);
  }, [
    name,
    schoolcode,
    classs,
    city,
    mobile,
    email,
    password,
    cpassword,
    registrationType,
  ]);

  function register() {
    if (password !== cpassword) {
      alert("Passwords do not match");
    } else if (users.some((user) => user.email === email)) {
      alert("Email Already Registered");
    } else {
      if (registrationType === "schoolCode") {
        const isValid = schoolcodes.some((code) => code.code === schoolcode);
        setIsSchoolCodeValid(isValid);
        if (!isValid) {
          alert("School Code is Invalid");
          return;
        }
      }
      const user = {
        name,
        mobile,
        school,
        schoolcode: registrationType === "schoolCode" ? schoolcode : "",
        classs,
        city,
        email,
        password,
      };
      console.log(user);
      dispatch(registerUser(user));
    }
  }

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-start shadow-lg p-3 mb-5 bg-white rounded">
          {loading && <Loading />}
          {success && <Success success="User Registered Successfully" />}
          {error && <Error error="Email already registered" />}
          {/* {!isSchoolCodeValid && registrationType === "schoolCode" && (
            <Error error="School Code is Invalid" />
          )} */}

          <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
            Register
          </h2>
          <div>
            <input
              required
              type="text"
              placeholder="Your Name"
              className="form-control"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <input
              required
              type="text"
              placeholder="Class"
              className="form-control"
              value={classs}
              onChange={(e) => {
                setclasss(e.target.value);
              }}
            />
            <input
              required
              type="text"
              placeholder="School Name"
              className="form-control"
              value={school}
              onChange={(e) => {
                setschool(e.target.value);
              }}
            />
            <input
              required
              type="text"
              placeholder="City"
              className="form-control"
              value={city}
              onChange={(e) => {
                setcity(e.target.value);
              }}
            />
            <input
              required
              type="text"
              placeholder="Mobile"
              className="form-control"
              value={mobile}
              onChange={(e) => {
                setmobile(e.target.value);
              }}
            />
            <input
              required
              type="text"
              placeholder="Email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              required
              type="password"
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <input
              required
              type="password"
              placeholder="Confirm Password"
              className="form-control mb-3"
              value={cpassword}
              onChange={(e) => {
                setcpassword(e.target.value);
              }}
            />

            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="radio"
                name="registrationType"
                id="schoolCode"
                value="schoolCode"
                checked={registrationType === "schoolCode"}
                onChange={() => setRegistrationType("schoolCode")}
                style={{
                  border: "1px solid #ced4da",
                  boxShadow: "none",
                  marginRight: "5px",
                }}
              />
              <label
                className="form-check-label"
                htmlFor="schoolCode"
                style={{ marginLeft: "5px" }}
              >
                Register with school code
              </label>
            </div>
            {/* <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="radio"
                name="registrationType"
                id="individual"
                value="individual"
                checked={registrationType === "individual"}
                onChange={() => setRegistrationType("individual")}
                style={{
                  border: "1px solid #ced4da",
                  boxShadow: "none",
                  marginRight: "5px",
                }}
              />
              <label
                className="form-check-label"
                htmlFor="individual"
                style={{ marginLeft: "5px" }}
              >
                Register as an individual without school code
              </label>
            </div> */}

            {registrationType === "schoolCode" && (
              <div>
                <input
                  required
                  type="text"
                  placeholder="School Code"
                  className="form-control"
                  value={schoolcode}
                  onChange={(e) => {
                    setschoolcode(e.target.value);
                  }}
                />
              </div>
            )}

            <button
              onClick={register}
              className="btn mt-3 mb-3"
              disabled={!isAllFieldsFilled}
            >
              REGISTER
            </button>
            <br></br>
            <a style={{ color: "black" }} href="/login">
              Click Here To Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
