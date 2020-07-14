import React from "react";
import { language } from "../../data/language";

const LangaugeSelect = ({onSelectChange, langSelected}) => {
    const options = language[langSelected];
    const printOptions = () => {
        return options.map(opt => (<option key={opt.value} value={opt.value}>{opt.desc}</option>));
    }

    const onChangeHandler = e => {
        onSelectChange(e.target.value);
    };

    return (
        <div>
        Idioma: 
        <select onChange={onChangeHandler} >
            {printOptions()}
        </select>
        </div>
    );
};

export default LangaugeSelect;
