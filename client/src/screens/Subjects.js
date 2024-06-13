import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSubject } from "../actions/subjectActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Success from "../components/Success";

export default function AddPizza() {
  const [sub, setsub] = useState("");
  //   const [school, setschool] = useState("");
  //   const [city, setcity] = useState("");

  const dispatch = useDispatch();

  const addsubjectstate = useSelector((state) => state.addSubjectReducer);
  const { success, error, loading } = addsubjectstate;
  function formHandler(e) {
    e.preventDefault();
    const subject = {
      sub,
      //   school,
      //   city,
    };
    console.log(subject);
    dispatch(addSubject(subject));
  }

  return (
    <div>
      <div className="text-start">
        <h1> Add Subject :</h1>

        {loading && <Loading />}
        {error && <Error error="Somethig went wrong" />}
        {success && <Success success="New Subject added successfully" />}

        <form onSubmit={formHandler}>
          <input
            className="form-control"
            type="text"
            placeholder="ADD SUBJECT"
            value={sub}
            onChange={(e) => {
              setsub(e.target.value);
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
