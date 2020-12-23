import React from 'react';
import './schedule.css';

export default function Datatable({data}){
    const columns = data[0] && Object.keys(data[0]);
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
                        <input type="checkbox" />
                    </td>
                </tr>)}
            </tbody>
        </table>
    );
}