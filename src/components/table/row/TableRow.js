import React from 'react';

import {BsCheckCircle} from "react-icons/bs";

const TableRow = ({row, index}) => {
    /**
     * Convert input to date Text 
     */
    const convertDate = (inputText) => {
        var d = new Date(inputText);
        return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
    }
    
    /** 
     * Convert input to date Text 
     */
    const convertTime = (inputText) => {
        var d = new Date(inputText);
        return [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
    }
    /**
     * Adds 0 into left for minor 10 numbers
     */
    const pad = (s) => (s < 10) ? '0' + s : s;

    let dateStr = convertDate(row.calldate);
    let hourStr = convertTime(row.calldate);
    let text = row.note.length > 25 ? row.note.substring(0, 25) + '...' : row.note;
    let rowClasses = (index + 1) % 2 == 0 ? 'alter' : ''
    return (
        <tr key={row.uid} className={rowClasses}>
            <td>{row.service}</td>
            <td>{row.destination}</td>
            <td className='center-text'>{row.source}</td>
            <td className='center-text'>{dateStr}</td>
            <td className='center-text'>{hourStr}</td>
            <td className='center-text'>{row.duration}</td>
            <td>{row.disposition}</td>
            <td title={row.note}>{text}</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td className='center-text'>{row.hasrecord ? <BsCheckCircle color='green' size='.9em' /> : ''}</td>
        </tr>
    );
}

export default TableRow;