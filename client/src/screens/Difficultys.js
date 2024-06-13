import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDifficulty } from "../actions/difficultyActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Success from "../components/Success";

export default function AddPizza() {
  const [diff, setdiff] = useState("");

  const dispatch = useDispatch();

  const adddifficultystate = useSelector((state) => state.addDifficultyReducer);
  const { success, error, loading } = adddifficultystate;
  function formHandler(e) {
    e.preventDefault();
    const difficulty = {
      diff,
    };
    console.log(difficulty);
    dispatch(addDifficulty(difficulty));
  }

  return (
    <div>
      <div className="text-start">
        <h1> Add Category :</h1>

        {loading && <Loading />}
        {error && <Error error="Somethig went wrong" />}
        {success && <Success success="New Category added successfully" />}

        <form onSubmit={formHandler}>
          <input
            className="form-control"
            type="text"
            placeholder="ADD CATEGORY"
            value={diff}
            onChange={(e) => {
              setdiff(e.target.value);
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
