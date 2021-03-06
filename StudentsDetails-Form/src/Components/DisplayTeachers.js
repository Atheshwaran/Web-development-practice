import React, { useState } from 'react';
import Table from './Data.css';
import { useSelector } from 'react-redux';
import { statesT } from '../Actions/Action';


function DisplayTeachers() {

    const stateT = useSelector((state) => state.teacher);
    let [result, setResult] = useState("");

    const getData = (index) => {
        setResult(stateT[index]);
        console.log(result);
    }

    const handler = (e) => {
        getData(e.target.value);
    }
    if (result === "" && stateT.length > 0)
        setResult(stateT[0])

    return (
        <>

            <h4> Get Teachers details here </h4>

            <div>
                {
                    <select onChange={handler}>{
                        stateT.map((teacher, index) => {

                            return (<option value={index} > {teacher.Name} </option>)

                        })

                    }

                    </select>
                }
            </div>

            <table className={Table} >
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Subject</th>
                        <th>Status</th>
                        <th>Phone</th>
                    </tr>


                    <tr className={Table}  >
                        <td > {result.Id} </td>
                        <td > {result.Name} </td>
                        <td > {result.Class} </td>
                        <td > {result.Subject} </td>
                        <td > {result.Status} </td>
                        <td > {result.Phone} </td>
                    </tr>
                </tbody>

            </table>

        </>)

}

export default DisplayTeachers;