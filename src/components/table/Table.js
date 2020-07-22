import React from "react";

import TableHeader from "./header";
import TableBody from "./body";
import TableGroupedBody from "./groupedBody";

import { headers } from "../../data/tableHeaders";
import { data } from "../../data/exerciceUITable";
import './Table.scss';

const Table = ({lang, orderField, orderType, grouped, onHeaderClicked}) => {

    const totalHeaders = headers[0].flatMap(r => r.val).length;
    const propsGrouping = ['id', 'uid', 'puid', 'puidSeq', 'calldate', 'account', 'service', 'serviceId', 'destination', 'destinationId', 'source', 'province', 'duration', 
        'disposition', 'cdrHost', 'note', 'poll', 'isWav', 'uniqueid', 'accountId', 'geonum', 'played', 'hasrecord', 'hasfax'];

    const dataCopy = [...data];

    const ascArray = headers[0].map((el) => React.useMemo(() => [...dataCopy.sort((a, b) => a[el.value] > b[el.value] ? -1 : 1)]));
    const descArray = headers[0].map((el) => React.useMemo(() => [...dataCopy.sort((a, b) => a[el.value] > b[el.value] ? 1 : -1)]));
    const groupedData = React.useMemo(() => propsGrouping.map((group) => [group, 
            dataCopy.reduce((objectKeyValue, obj) => {
                const val = obj[group];
                objectKeyValue[val] = (objectKeyValue[val] || []).concat(obj);
                return objectKeyValue;}, {})]));
    const handleClick = e => {
        e.preventDefault();
        onHeaderClicked(e.target.getAttribute('headerindex'), e.target.getAttribute('order'));
    }

    return ( 
        <div className='table-container table-responsive' >
            <table className='ui-table table table-stripped'>
                <TableHeader lang={lang} handleClick={handleClick} orderField={orderField} orderType={orderType} />
                {grouped ? <TableGroupedBody grouped={grouped} orderField={headers[0][orderField ? orderField : 0].value} orderType={orderType} totalHeaders={totalHeaders} groupedData={groupedData} /> : 
                <TableBody orderField={orderField} orderType={orderType} ascArray={ascArray} descArray={descArray} data={dataCopy} />}
            </table>
        </div>
    );
};

export default Table;