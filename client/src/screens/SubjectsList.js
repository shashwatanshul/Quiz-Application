import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../components/Error";
import { deleteSubject, getAllSubjects } from "../actions/subjectActions";
export default function SubjectsList() {
  const dispatch = useDispatch();
  const subjectsstate = useSelector((state) => state.getAllSubjectsReducer);
  const { subjects, error } = subjectsstate;
  useEffect(() => {
    dispatch(getAllSubjects());
  }, []);
  return (
    <div>
      <hr></hr>
      <h1>Subjects List</h1>
      <hr></hr>
      <div className="table-responsive">
        {error && <Error error="Something went wrong" />}
        <table
          className="table table-bordered"
          style={{ borderColor: "#343a40" }}
        >
          <thead className="table-dark">
            <tr>
              <th>Subjects</th>
              {/* <th>School Name</th>
              <th>City</th> */}
              <th>Delete</th>
            </tr>
          </thead>
          {subjects &&
            subjects.map((subject) => {
              return (
                <tr>
                  <td>{subject.sub}</td>
                  <td>
                    <i
                      className="fa fa-trash m1"
                      onClick={() => {
                        dispatch(deleteSubject(subject._id));
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
