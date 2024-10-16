import {
    GetPhysFormulaByIndex,
    GetMathFormulasCount

} from "../../wailsjs/go/main/App.js";
import FormulaDetails from "../tools/formulaDetails.jsx";
import invoke from '@wailsapp/runtime';
import {useEffect, useState} from "react";
import {Divider, List} from "antd";
import {LogPrint} from "../../wailsjs/runtime/runtime.js";

const MathFormulasFrontend = () => {

    const [formula, setFormula] = useState(null);

    useEffect(()=>{
        const fetchPhysFormula = async (index) => {

            try {
                const result = await GetPhysFormulaByIndex(0); // Вызов Go функции
                setFormula(result);  // Устанавливаем результат в состояние
            } catch (error) {
                LogPrint('Ошибка при получении формулы:', error);
            }}
        fetchPhysFormula();
    }, [])

    return(
        <FormulaDetails formula={formula}/>
    )
};

export default MathFormulasFrontend