

import React from 'react'

export default function ResultsAll({data}) {
    let id=data._id;
    const deliting=()=>{
        fetch(`https://school-management-api-six.vercel.app//result/${id}`,{
        method:'delete',
       
    }).then(respo=>console.log(respo))
  }
  return (
    <div>
        <div className="name">
            {data.studentName}
        </div>
        <button onClick={()=>deliting()}>Delete</button>
    </div>
  )
}
