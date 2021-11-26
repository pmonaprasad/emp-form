import React, { useState } from 'react';
import './EmpForm.css';

const EmpForm = () => {

    const [name, updateName] = useState("");
    const [designation, updateDesignation] = useState("");
    // const [contact, updateContact] = useState("");
    const [skills, updateSkills] = useState("");
    const [dob, updateDob] = useState("");

    const contactArr = [{type:"primary", number: ""}];

    const [contact, setContact] = useState(contactArr);
    // const [skills, setSkills] = useState(skillsArr);

    //run below code when user hit submit button
    const submit = () => {
        var empData = JSON.stringify({
            name: name,
            designation: designation,
            contact: contact,
            skills:skills,
            dob: dob
        });

        //post employee data submitted by the user
        const url = "http://localhost:3002/data";
        console.log(empData);
        async function postRequest(url, empData) {
            try {
                let response = await( await fetch(url, {
                    method: "POST",
                    headers: {"Content-Type":"application/json"},
                    body: empData,
                })).json();
            } catch(e) {
                console.log(e);
            }
        }
        postRequest(url, empData);
        // axios.post(url, empData, {headers: {"Content-Type":"application/json"}}).then((resp) => alert("Success")).catch((err) => console.log(err));
        // alert('Data saved successfully');
    }

    //Add input field if user clicks on add icon
    const addInputField = () => {
        setContact ((inp) => {
            return [...inp,
                    {type:"emergency",number:""}
                ]
        })
    }

    //Update state after taking input from users
    const updateContact = (event) => {
        event.preventDefault();
        let index = event.target.id;
        setContact((inp) => {
            let arr = inp.slice();
            arr[index].number = event.target.value;
            return arr;
        })
    }

    
    // const addSkills = () => {         
    //             let values =[...skills];
    //             values.push(null);
    //             setSkills(values);
    // }

    // const updateSkills = (i,event) => {
    //     // let index = event.target.id;
    //     event.preventDefault();
    //         let arr = [...skills];
    //         arr[i].value = event.target.value;
    //         setSkills(arr);
    // }

    return (
        <div className="container">
            <h2>Employee Data</h2>
            <div className="emp-table">
                <table>
                    <tbody>
                        <tr>
                            <td><b>Name: </b></td>
                            <td><input type="text" onChange={(inp) => updateName(inp.target.value)}/></td>
                        </tr>
                        <tr>
                            <td><b>Designation: </b></td>
                            <td><input type="text" onChange={(inp) => updateDesignation(inp.target.value)}/></td>
                        </tr>
                        <tr>
                            <td><b>Contact Details: </b></td>
                            {/* <td><input type="text" onChange={(inp) => updateContact(inp.target.value)}/></td> */}
                            
                                {contact.map((inp,i) => {
                                    return (
                                        <tr key={i}><td>
                                            <input type={inp.type} number={inp.value}
                                            onChange={updateContact} id={i}/>
                                        </td></tr>
                                    )
                                })}
                                <td className="add-button"><button onClick={addInputField}>+</button>
                            </td>
                        </tr>
                        <tr>
                            <td><b>Skills: </b></td>
                            <td><input type="text" onChange={(inp) => updateSkills(inp.target.value)} id="1"/></td>
                            {/* {skills.map((inp,i) => {
                                    return (
                                        <tr key={i}><td>
                                            <input type="text"
                                            onChange={(e) => updateSkills(i, e)} id={i}/>
                                        </td></tr>
                                    )
                                })}
                                <td className="add-button"><button onClick={addSkills}>+</button>
                            </td> */}
                        </tr>
                        <tr>
                            <td><b>DOB: </b></td>
                            <td><input type="text" onChange={(inp) => updateDob(inp.target.value)}/></td>
                        </tr>
                        <tr colSpan="2">
                            <th className="submit-button"><button onClick={submit}><b>Submit </b></button></th>
                        </tr>
                    </tbody>
                </table>
                
            </div>
        </div>
    )
}

export default EmpForm;