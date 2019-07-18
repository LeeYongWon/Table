import React, { Component } from 'react';



class Table extends Component {
    render() {
        const {characterData, removeCharacter} =this.props
        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
        );
    }
}

const TableBody = (table) => {
    const rows=table.characterData.map((value, index)=>{
        console.log(`TableBody에서 ${index}`);
        return (
            <tr key={index+1}>
                <td>{value.name}</td>
                <td>{value.job}</td>
                <td>
                    <button onClick={() => table.removeCharacter(index)}>삭제버틍 </button>
                </td>
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