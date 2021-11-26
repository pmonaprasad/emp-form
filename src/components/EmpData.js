import React, {useState, useEffect} from "react";
import "./EmpData.css";

function EmpData() {

    const[emp, getEmp] = useState([]);
    const url = "https://my-empoyee-form.herokuapp.com/api";

    const getEmpData = () => {
        fetch(url)
        .then((res) => res.json())
        .then((info) => getEmp(info));
        // console.log(emp);
    }

    useEffect(() => {
        getEmpData();
    })

    //Download file
    function download(content, fileName, contentType) {
        let a = document.createElement('a');
        let file = new Blob([content],{type:contentType});
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
    }

    function onDownload() {
        download(JSON.stringify(emp), "employee-data.json","application/json");
    }

    return(
        <div className="container">
            {/* Download button */}
                        <div className="download-button">
                            <button type="button" onClick={onDownload}>Download JSON</button>
                        </div>
            {/* Employee list to display in the browser*/}
            <h2>Employee List</h2>
                {emp.map((empDetails, index) => {
                    return (

                    <table key={index} className="emp-info">
                       <thead><tr><th>Employee #{index+1}</th></tr></thead>
                       <tbody>
                       <tr>
                           <td><b>Name: </b></td>
                           <td>{empDetails.name}</td>
                       </tr>
                       <tr>
                           <td><b>Designation: </b></td>
                           <td>{empDetails.designation}</td>
                       </tr>
                       <tr>
                           <td><b>Contact: </b></td>
                           <td>{empDetails.contact.map((det, index) => {
                                 return <p key={index} className="no-margin">{det.type} - {det.number}</p>
                             })}</td>
                       </tr>
                       <tr>
                           <td><b>Skills: </b></td>
                           <td>{empDetails.skills}</td>
                           {/* <td>{empDetails.skills.map((skill, index) => {
                                 return <p key={index} className="no-margin">{skill}</p>
                             })}</td> */}
                       </tr>
                       <tr>
                           <td><b>DOB: </b></td>
                           <td>{empDetails.dob}</td>
                       </tr>
                       </tbody>
                    </table>
                    )                  
            })}

        </div>
        
    )
}

export default EmpData;