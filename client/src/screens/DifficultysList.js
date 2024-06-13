import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../components/Error";
import {
  deleteDifficulty,
  getAllDifficultys,
} from "../actions/difficultyActions";
export default function DifficultysList() {
  const dispatch = useDispatch();
  const difficultysstate = useSelector(
    (state) => state.getAllDifficultysReducer
  );
  const { difficultys, error } = difficultysstate;
  useEffect(() => {
    dispatch(getAllDifficultys());
  }, []);
  return (
    <div>
      <hr></hr>
      <h1>Category List</h1>
      <hr></hr>
      <div className="table-responsive">
        {error && <Error error="Something went wrong" />}
        <table
          className="table table-bordered"
          style={{ borderColor: "#343a40" }}
        >
          <thead className="table-dark">
            <tr>
              <th>Categories</th>
              <th>Delete</th>
            </tr>
          </thead>
          {difficultys &&
            difficultys.map((difficulty) => {
              return (
                <tr>
                  <td>{difficulty.diff}</td>
                  <td>
                    <i
                      className="fa fa-trash m1"
                      onClick={() => {
                        dispatch(deleteDifficulty(difficulty._id));
                      }}
                    ></i>
                  </td>
                </tr>
              );
            })}
        </table>
      </div>
    </div>
  );
}
