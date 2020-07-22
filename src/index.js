import React, {useState} from "react";
import {render} from "react-dom";
import LanguageSelect from "./components/languageSelect";
import Grouper from "./components/grouper";
import Table from "./components/table";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./index.scss";

const App = () => { 

    const defaultLang = 0;
    const defaulOrder = 'desc';

    const[language, setLanguage] = useState(defaultLang);
    const[group, setGroup] = useState('');
    const[orderField, setOrderField] = useState();
    const[orderType, setOrderType] = useState('desc');

    const onChangeSelect = (lang) => {
        setLanguage(lang)
    }

    const onGroupSelect = (groupSel) => {
        setGroup(groupSel);
    }

    const onHeaderClicked = (order, type) => {
        setOrderField(order);
        setOrderType(type ? type : defaulOrder);
    }

    return (        
        <div className='container-fluid'>
            <div className='form-group'>
                <LanguageSelect onSelectChange={onChangeSelect} langSelected={language} />
                <Grouper onSelectChange={onGroupSelect} />
            </div>
            <Table lang={language} orderField={orderField} orderType={orderType} grouped={group} onHeaderClicked={onHeaderClicked}/>
        </div>
    );
};

render( <App /> , document.getElementById("root"));