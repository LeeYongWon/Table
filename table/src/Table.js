import React, { Component } from 'react';



class Table extends Component {
    render() {
        const {characterData} =this.props
        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} />
            </table>
        );
    }
}

const TableBody = (table) => {

    const rows=table.characterData.map((value, index)=>{
        return (
            
            <tr key={index+1}>
                <td>{value.name}</td>
                <td>{value.job}</td>
            </tr>
        );
    })
    console.log(rows);
    return (
        <tbody>{rows}</tbody>
    );
}
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>job</th>
            </tr>
        </thead>
    );
}
export default Table;