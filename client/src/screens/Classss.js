import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addClasss } from "../actions/classsActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Success from "../components/Success";

export default function AddPizza() {
  const [cls, setcls] = useState("");

  const dispatch = useDispatch();

  const addclasssstate = useSelector((state) => state.addClasssReducer);
  const { success, error, loading } = addclasssstate;
  function formHandler(e) {
    e.preventDefault();
    const classs = {
      cls,
    };
    console.log(classs);
    dispatch(addClasss(classs));
  }

  return (
    <div>
      <div className="text-start">
        <h1> Add Class :</h1>

        {loading && <Loading />}
        {error && <Error error="Somethig went wrong" />}
        {success && <Success success="New Class added successfully" />}

        <form onSubmit={formHandler}>
          <input
            className="form-control"
            type="text"
            placeholder="ADD CLASS"
            value={cls}
            onChange={(e) => {
              setcls(e.target.value);
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
