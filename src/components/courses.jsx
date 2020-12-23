import React,{useState} from 'react';
import './schedule.css';
import {Link,Route} from 'react-router-dom'
import {Asistencia} from "../pages/asistencia";

export default function Course({data}){
    const columns = data[0] && Object.keys(data[0]);
    const [course, setCourse] = useState("");
    async function handleClick(value) {
        await setCourse(value)
        console.log(value);
        return(
            <div>
                <Asistencia curso={value}/>
            </div>
        )
      }

    return(
        <table className="table" cellPadding = {0} cellSpacing={0}> 
            <thead>
                <tr>
                    {data[0] && columns.map(heading => <th>{heading}</th>)}
                    <th>
                        Presente
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map(row => 
                <tr>
                    {
                        columns.map(
                            column => <td>
                                {
                                    row[column]
                                }
                            </td>
                        )
                    }
                    <td>
                        <button className="btn btn-primary btn-sm " type="submit" onClick={async ()=>await handleClick(row["nombre"])}>Tomar Asistencia</button>
                        {/* <li className="nav-item"><Link className="nav-link" to={"/"+row[0]}>Tomar Asistencia</Link> </li>
                        <Route path={"/"+row[0]} component={Asistencia}/>*/}
                    </td>
                </tr>)}
            </tbody>
        </table>

    );
}