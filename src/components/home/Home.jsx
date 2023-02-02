import "./home.scss";
import React from "react";

import FormClass from "../formClass/FormClass";
import FormStudent from "../formStudent/FormStudent";

import Marksheet from "../marksheet/Marksheet";
import RowResult from "../rowResult/RowResult";
import { useData } from "../../context";
import Loading from "../loading/Loading";

export default function Home() {
  const { dispatch, data } = useData();

  return (
    <div className="home">
      <div className="forms">
        <div className="option">
          <div className="heading">Reault Sheet For</div>
          <select
            onChange={(e) =>
              dispatch({
                type: "changeForm",
                value: e.target.value,
              })
            }
          >
            <option disabled value="">
              Select Option
            </option>
            <option value="student">Student</option>
            <option value="class">Class</option>
          </select>
        </div>
        <div className="subForms">
          <FormClass />
          <FormStudent />
        </div>
      </div>
      <div className="results">
        {data.loading && <Loading />}
        
        {data.type == "single" && <Marksheet />};
      </div>
    </div>
  );
}
