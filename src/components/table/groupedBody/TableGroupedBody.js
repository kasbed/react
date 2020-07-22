import React from "react";

import TableRow from "../row"

const TableGroupedBody = ({grouped, orderField, orderType, totalHeaders, groupedData}) => {
    
    const groupArray = groupedData.filter(pos => pos[0] == grouped)[0];
    const generateRows = (group) => {
        return groupArray[1][group].sort((a, b) => {
            let negate = orderType == 'asc' ? -1 : 1;
            return negate * (a[orderField] - b[orderField]);
        }).map((row, index) => <TableRow row={row} index={index} />);
    }

    const generateGroupedBody = () => {
        return Object.getOwnPropertyNames(groupArray[1]).map((group) => {
            return (
                <>
                    <tr key={group}>
                        <th colSpan={totalHeaders} className='group-row left-text'>{group}</th>
                    </tr>
                    {generateRows(group)}        
                </>
            );
        });
    }

    return (
        <tbody>
            {generateGroupedBody()}
        </tbody>
    );
};

export default TableGroupedBody;