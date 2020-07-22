import React from "react";

import {BsFillCaretDownFill} from "react-icons/bs";
import {BsFillCaretUpFill} from "react-icons/bs";
import { headers } from "../../../data/tableHeaders";

const TableHeader = ({lang, handleClick, orderField, orderType}) => {

    const languageArray = React.useMemo(() => headers);

    const generateHeader = () => {
            return languageArray[lang].map((el, indx) => {
            let orderDir = '';
            let classes = 'order-header';
            if(orderField == el.idx) {
                orderDir = orderType || orderType === 'desc' ? 'asc' : 'desc';
                classes += ' active';
            }
            return (
                <th key={indx} className={classes} onClick={handleClick} propname={el.value} order={orderDir} headerindex={el.idx}>
                    {el.desc} {orderType === 'desc' ? <BsFillCaretDownFill size='.8em' /> : <BsFillCaretUpFill size='.8em' />}
                </th>);
        });}

    return (<thead><tr key='header-app' >{generateHeader()}</tr></thead>);
}


export default TableHeader;