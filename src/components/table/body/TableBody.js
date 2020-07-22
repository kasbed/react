import React from "react";

import TableRow from "../row"

const TableBody = ({orderField, orderType, ascArray, descArray, data}) => {

    const generateRows = () => {
        if(!orderField)
            return data.map((row, index) => <TableRow row={row} index={index} />);
        if(orderType === 'asc') {   
            return ascArray[orderField].map((row, index) => <TableRow row={row} index={index} />);
        } else {
            return descArray[orderField].map((row, index) => <TableRow row={row} index={index} />);
        }
    }

    return (
        <tbody>
            {generateRows()}
        </tbody>
    );
}

export default TableBody;