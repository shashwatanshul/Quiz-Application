import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSchoolcode } from "../actions/schoolcodeActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Success from "../components/Success";

export default function AddPizza() {
  const [code, setcode] = useState("");
  const [school, setschool] = useState("");
  const [city, setcity] = useState("");

  const dispatch = useDispatch();

  const addschoolcodestate = useSelector((state) => state.addSchoolcodeReducer);
  const { success, error, loading } = addschoolcodestate;
  function formHandler(e) {
    e.preventDefault();
    const schoolcode = {
      code,
      school,
      city,
    };
    console.log(schoolcode);
    dispatch(addSchoolcode(schoolcode));
  }

  return (
    <div>
      <div className="text-start">
        <h1> Add School Code :</h1>

        {loading && <Loading />}
        {error && <Error error="Somethig went wrong" />}
        {success && <Success success="New School Code added successfully" />}

        <form onSubmit={formHandler}>
          <input
            className="form-control"
            type="text"
            placeholder="ADD SCHOOL CODE"
            value={code}
            onChange={(e) => {
              setcode(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="ADD SCHOOL NAME"
            value={school}
            onChange={(e) => {
              setschool(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="ADD SCHOOL CITY"
            value={city}
            onChange={(e) => {
              setcity(e.target.value);
            }}
          />

          <button className="btn mt-3" type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
