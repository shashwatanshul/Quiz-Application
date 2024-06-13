import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../components/Error";
import { deleteClasss, getAllClassss } from "../actions/classsActions";
export default function ClassssList() {
  const dispatch = useDispatch();
  const classssstate = useSelector((state) => state.getAllClassssReducer);
  const { classss, error } = classssstate;
  useEffect(() => {
    dispatch(getAllClassss());
  }, []);
  return (
    <div>
      <hr></hr>
      <h1>Class List</h1>
      <hr></hr>
      <div className="table-responsive">
        {error && <Error error="Something went wrong" />}
        <table
          className="table table-bordered"
          style={{ borderColor: "#343a40" }}
        >
          <thead className="table-dark">
            <tr>
              <th>Classes</th>
              <th>Delete</th>
            </tr>
          </thead>
          {classss &&
            classss.map((classs) => {
              return (
                <tr>
                  <td>{classs.cls}</td>
                  <td>
                    <i
                      className="fa fa-trash m1"
                      onClick={() => {
                        dispatch(deleteClasss(classs._id));
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
