import React from "react";
import './searched.scss'
import {Tune,Clear,Search} from '@material-ui/icons';
import { useState } from "react";
import { useData } from "../../context";
import RowResultContainer from "../rowResultContainer/RowResultContainer";
export default function Searched() {
 const {data} = useData();
  const [pageData, setPageData] = useState(data.results)
  const [showFilter, setShowFilter] = useState(false)
  const [minTotal, setMinTotal] = useState(400);
  const [maxTotal, setMaxTotal] = useState(900);
  const [minGPA, setMinGPA] = useState(3.00)
  const [maxGPA, setMaxGPA] = useState(5.00)
  const handleSubmit =(e) => {
    e.preventDefault()
  }
  const handleSearch  =()=>{
    setShowFilter((pre)=>!pre)
    const filteredData = data.results.filter((item) => item.totalMark >=minTotal && item.totalMark<=maxTotal && item.GPA >=minGPA && item.GPA <=maxGPA )
    setPageData(filteredData)
  }
  return (
    <div className="searched">
      
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
            <div>
              <label>Total Mark :</label>
              <input type={'text'} defaultValue={minTotal } onChange={(e)=>setMinTotal(e.target.value)} placeholder='min'/>
              <span>To</span>
              <input type={'text'} defaultValue={ maxTotal} onChange={(e)=>setMaxTotal(e.target.value)} placeholder='max'/>
            </div>
            <div>
              <label>GPA :</label>
              <input type={'text'} defaultValue={ minGPA} onChange={(e)=>setMinGPA(e.target.value)} placeholder='min'/>
              <span>To</span>
              <input type={'text'} defaultValue={ maxGPA} onChange={(e)=>setMaxGPA(e.target.value)} placeholder='max'/>
            </div>
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
        {pageData.length > 0 ? <RowResultContainer results={pageData}/>:<div className="noresult">No Result Found</div>}
        
      </div>
      
    </div>
  );
}
