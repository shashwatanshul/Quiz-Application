import React from "react";
import ResultTable from "./ResultTable";

export default function AdminPanel() {
  return (
    <div className="container">
      <h1 className="title text-light">Admin Panel</h1>
      <div className="container">
        {/* result table */}
        <ResultTable></ResultTable>
      </div>
    </div>
  );
}
