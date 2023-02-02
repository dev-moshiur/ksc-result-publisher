import React from "react";
import './searched.scss'
import {Tune,Clear,Search} from '@material-ui/icons';
import { useState } from "react";
import { useData } from "../../context";
import loadingImg from '../Loading_2.gif'
import RowResultContainer from "../rowResultContainer/RowResultContainer";
export default function Searched() {
  const {data,getRequest} = useData();
  const [showFilter, setShowFilter] = useState(false)
  const [examtype, setExamtype] = useState('Half-Yearly Examination 2023')
  const [className, setClassName] = useState(10)
  const [group, setGroup] = useState('science')
  const [loading, setLoading] = useState(false)
  const handleSubmit =(e) => {
    e.preventDefault()
  }
  const handleSearch  =()=>{
    
    getRequest(
      `className=${className}&group=${group}&examtype=${examtype}`
    );
    setShowFilter((pre)=>!pre)
  }
  return (
    <div className="searched">
      {data.loading && <div className="loading">
        <img src={loadingImg} alt="" />
        
        </div>}
      <button onClick={()=>setShowFilter((pre)=>!pre)}>
        <Tune/>
        <span>
          Filter
        </span>
      </button>
      {showFilter &&
      <div className="filter">
        <button className="clear" onClick={()=>setShowFilter((pre)=>!pre)}>
          <Clear/>

        </button>
        <div className="filteringKeys">

          <form onSubmit={handleSubmit}>

          <label htmlFor="examtype">
            Exam Name
          </label>
          <select name="examtype" id="" 
          onChange={(e)=>setExamtype(e.target.value)}>
            <option value="Half-Yearly Examination 2023">Half-Yearly Examination 2023</option>
            <option value="Model Test Examination 2023">Model Test Examination 2023</option>
            <option value="Weekly Test-35 2023">Weekly Test-35 2023</option>
            <option value="Final Examination 2023">Final Examination 2023</option>
          </select>
          <label htmlFor="class">
            Class
          </label>
          <input defaultValue={className} type="number" name="class" id="" onChange={(e)=>setClassName(e.target.value)} />
          
          <label htmlFor="group">
            Group
          </label>
          <select name="group" id="" onChange={(e)=>setGroup(e.target.value)}>
            <option value="science">science</option>
            <option value="humanities">humanities</option>
            <option value="business">business</option>
            <option value="no group">no group</option>
          </select>
          </form>
          

        </div>
        <button>
          <Search/>
          <span onClick={handleSearch}>
            Search
          </span>
          
        </button>
      </div>}
      <div className="results">
        {data.results.length > 0 ? <RowResultContainer />:<div className="noresult">No Result Found</div>}
        
      </div>
      
    </div>
  );
}
