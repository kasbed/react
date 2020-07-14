import React from "react";

import {BsFillCaretDownFill} from "react-icons/bs";
import {BsFillCaretUpFill} from "react-icons/bs";
import {BsCheckCircle} from "react-icons/bs";

import { headers } from "../../data/tableHeaders";
import {data} from "../../data/exerciceUITable";


import './Table.scss';

const Table = ({lang, orderField, orderType, grouped, onHeaderClicked}) => {

    const totalHeaders = headers[0].flatMap(r => r.val).length;

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

    const handleClick = e => {
        e.preventDefault();
        onHeaderClicked(e.target.getAttribute('propname'), e.target.getAttribute('order'));
    }

    const generateHeaders = () => {
        return headers[lang].map(el => {
            let orderDir = '';
            let classes = 'order-header';
            if(orderField === el.value) {
                orderDir = orderType ? 'asc' : 'desc';
                classes += ' active';
            }
            return (<th className={classes} onClick={handleClick} propname={el.value} order={orderDir}>
                {el.desc} {orderType === 'desc' ? <BsFillCaretDownFill size='.8em' /> : <BsFillCaretUpFill size='.8em' />}
            </th>);
        });
    }
    
    const generateBody = () => {
        if(grouped) {
           return generateGroupedBody();
        } 
        return generateFlatBody();
    }

    const generateGroupedBody = () => {
        let dataGrouped = data.reduce((objectKeyValue, obj) => {
            const val = obj[grouped];
            objectKeyValue[val] = (objectKeyValue[val] || []).concat(obj);
            return objectKeyValue;
        }, {});
        return Object.getOwnPropertyNames(dataGrouped).map((group) => {
            let childRows = sortData(dataGrouped[group]).map((el, indx) => generateRow(el, indx));
            return (
                <>
                    <tr>
                        <th colSpan={totalHeaders} className='group-row left-text'>{group}</th>
                    </tr>
                    {childRows}
                </>
            );
        });
    }

    const generateFlatBody = () => {
        let dataSorted = sortData(data);
        return dataSorted.map((el, indx) => generateRow(el, indx));
    }

    const generateRow = (row, index) => {
        let dateStr = convertDate(row.calldate);
        let hourStr = convertTime(row.calldate);
        let text = row.note.length > 25 ? row.note.substring(0, 25) + '...' : row.note;
        let rowClasses = (index + 1) % 2 == 0 ? 'row alter' : 'row'
        return (
            <tr key={row.uuid} className={rowClasses}>
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
                <td className='center-text'>{row.hasrecord ? <BsCheckCircle color='green' size='.8em' /> : ''}</td>
            </tr>
        );
    }

    const sortData = (dataToSort) => {
        return dataToSort.sort((a, b) => {
            let negate = orderType === 'asc' ? -1 : 1;
            return  a[orderField] > b[orderField] ? (1 * negate) : (-1 * negate);
        });
    }

    return ( 
        <div className='table-container' >
            <table className='ui-table'>
                <thead><tr>{generateHeaders()}</tr></thead>
                <tbody>{generateBody()}</tbody>
            </table>
        </div>
    );
};

export default Table;