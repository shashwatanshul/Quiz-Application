import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../components/Error";
import {
  deleteSchoolcode,
  getAllSchoolcodes,
} from "../actions/schoolcodeActions";
export default function SchoolcodesList() {
  const dispatch = useDispatch();
  const schoolcodesstate = useSelector(
    (state) => state.getAllSchoolcodesReducer
  );
  const { schoolcodes, error } = schoolcodesstate;
  useEffect(() => {
    dispatch(getAllSchoolcodes());
  }, []);
  return (
    <div>
      <hr></hr>
      <h1>Schoolcodes List</h1>
      <hr></hr>
      <div className="table-responsive">
        {error && <Error error="Something went wrong" />}
        <table
          className="table table-bordered"
          style={{ borderColor: "#343a40" }}
        >
          <thead className="table-dark">
            <tr>
              <th>School Code</th>
              <th>School Name</th>
              <th>City</th>
              <th>Delete</th>
            </tr>
          </thead>
          {schoolcodes &&
            schoolcodes.map((schoolcode) => {
              return (
                <tr>
                  <td>{schoolcode.code}</td>
                  <td>{schoolcode.school}</td>
                  <td>{schoolcode.city}</td>
                  <td>
                    <i
                      className="fa fa-trash m1"
                      onClick={() => {
                        dispatch(deleteSchoolcode(schoolcode._id));
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
