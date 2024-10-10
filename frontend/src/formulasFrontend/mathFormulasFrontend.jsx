import {
    GetFormulaDescription,
    GetFormulaExpression,
    GetFormulaName,
    GetDefaultPhysFormula,
    GetPhysFormulaByIndex
} from "../../wailsjs/go/main/App.js";
import FormulaDetails from "../tools/formulaDetails.jsx";
import invoke from '@wailsapp/runtime';
import {useEffect, useState} from "react";

const MathFormulasFrontend = () => {
    const [formula, setFormula] = useState(null);
    useEffect(()=>{
        const fetchPhysFormula = async (index) => {

            try {
                const result = await invoke('GetPhysFormulaByIndex', index);  // Вызов Go функции
                setFormula(result);  // Устанавливаем результат в состояние
            } catch (error) {
                console.error('Ошибка при получении формулы:', error);
            }}
        fetchPhysFormula();
    }, [])




    return(
        <FormulaDetails formula={formula}/>
    )
};

export default MathFormulasFrontend