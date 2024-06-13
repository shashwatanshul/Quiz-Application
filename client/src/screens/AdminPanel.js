import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { Link, Outlet } from "react-router-dom";

export default function AdminScreen() {
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;

  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div style={{ paddingTop: "70px" }}>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <h2 style={{ fontSize: "35px" }}>Admin Panel</h2>
          <nav>
            <ul className="adminfunctions">
              <li>
                <Link to="/adminpanel/userlist">Users List</Link>
              </li>
              <li>
                <Link to="/adminpanel/quizslist">Quiz List</Link>
              </li>
              <li>
                <Link to="/adminpanel/addquiz">Add New Quiz</Link>
              </li>
              <li>
                <Link to="/adminpanel/subscriptionlist">Subscription List</Link>
              </li>
              <li>
                <Link to="/adminpanel/schoolcodes">Add School Code</Link>
              </li>
              <li>
                <Link to="/adminpanel/schoolcodeslist">School Code List</Link>
              </li>
              <br></br>
              <br></br>
              <li>
                <Link to="/adminpanel/subjects">Add Subject</Link>
              </li>
              <li>
                <Link to="/adminpanel/subjectslist">Subject List</Link>
              </li>
              <li>
                <Link to="/adminpanel/difficultys">Add Category</Link>
              </li>
              <li>
                <Link to="/adminpanel/difficultyslist">Category List</Link>
              </li>
              <li>
                <Link to="/adminpanel/classss">Add Class</Link>
              </li>
              <li>
                <Link to="/adminpanel/classsslist">Class List</Link>
              </li>
            </ul>
          </nav>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
