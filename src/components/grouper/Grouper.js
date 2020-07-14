import React from "react";

const Grouper = ({onSelectChange}) => {

    const handleChange = e => {
        onSelectChange(e.target.value);
    }

    return (<div>
        Agrupar: 
        <select onChange={handleChange}> 
            <option key="1" value="">-</option>
            <option key="2" value='id'>Id</option>
            <option key="3" value='uid'>Uid</option>
            <option key="4" value='puid'>Puid</option>
            <option key="5" value='puidSeq'>Puid Seq</option>
            <option key="6" value='calldate'>Fecha</option>
            <option key="7" value='account'>Cuenta</option>
            <option key="8" value='service'>Servicio</option>
            <option key="9" value='serviceId'>Id servicio</option>
            <option key="10" value='destination'>Destino/Agente</option>
            <option key="11" value='destinationId'>Id Destino/Agente</option>        
            <option key="12" value='source'>Núm. Contacto</option>
            <option key="13" value='province'>Provincia</option>
            <option key="14" value='duration'>Duración</option>
            <option key="15" value='disposition'>Estado</option>
            <option key="16" value='cdrHost'>CDR Host</option>
            <option key="17" value='note'>Texto</option>
            <option key="18" value='poll'>Encuesta</option>
            <option key="19" value='isWav'>WAV</option>
            <option key="20" value='uniqueid'>Id única</option>
            <option key="21" value='accountId'>Id Cuenta</option>
            <option key="22" value='geonum'>Geonum</option>
            <option key="23" value='geoname'>Geoname</option>
            <option key="24" value='played'>Played</option>
            <option key="25" value='hasrecord'>Grabación</option>
            <option key="26" value='hasfax'>Fax</option>
        </select> 
        </div>
    );
};

export default Grouper;