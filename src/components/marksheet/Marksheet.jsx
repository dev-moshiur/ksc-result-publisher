


import './marksheet.scss'

import { useData } from '../../context';

import React from 'react'
import jsPDF from 'jspdf'

export default function () {
    const {data} = useData();
    const genaratePDF =()=>{

        let doc = new jsPDF('p','pt','a4')
        doc.html(document.getElementById('pdfDownload'),{
            callback:(pdf)=>{
                pdf.save('result.pdf');

            }
        })


    }
    let id=data.results[0]._id;
//     const deliting=()=>{
//         fetch(`https://school-management-api-six.vercel.app/result/${id}`,{
//         method:'delete',
       
//     }).then(respo=>console.log(respo))
//   }
    
  return (
    <div className='marksheet'>
        

       <div className="container" id='pdfDownload'>

           <div className="top">

               <div className="schoolName">
                   {data.results[0].schoolName}
               </div>
               <div className="examName">
               {data.results[0].examtype}
               </div>

           </div>
           <div className="middle">
               <div className="stdName">
                  <span className="head">Name : </span><span className="value">{data.results[0].studentName}</span> 
               </div>
               <div className="divission">

               <span className="head">Group : </span><span className="value">{data.results[0].group}</span>

               </div>
               <div className="classes">

               <span className="head">Class : </span><span className="value">{data.results[0].className}</span>

               </div>
               
               <div className="roll">

               <span className="head">Roll : </span><span className="value">{data.results[0].roll}</span>

               </div>
               <div className="roll">

               <span className="head">GPA : </span><span className="value">{data.results[0].GPA}</span>

               </div>
               <div className="roll">

               <span className="head">Result : </span><span className="value">{data.results[0].greade}</span>

               </div>
               <div className="roll">

               <span className="head">Total Mark : </span><span className="value">{data.results[0].totalMark}</span>

               </div>


           </div>
           <div className="bottom">
               <div className="heading">
                   Result Sheet
               </div>
               <table>
                   <thead>
                  
                       <tr>
                           <th>Subject Name</th>
                           <th>GPA</th>
                           <th>Mark</th>
                           <th>Point</th>
                       </tr>
                  </thead>
                  <tbody>
                   
                       {data.results[0].subjets.map((items)=><tr>
                           <td>{items.subject}</td>
                           <td>{items.subGreate}</td>
                           <td>{items.subMarks}</td>
                           <td>{items.subGpa}</td>
                       </tr>)}
                    </tbody>  
                       
                   
               </table>

           </div>

       </div>
       <button onClick={genaratePDF}>
        Download as PDF
    </button>
        
    </div>
  )
}
