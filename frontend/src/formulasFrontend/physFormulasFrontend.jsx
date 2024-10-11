import {
    GetPhysFormulaByIndex,
    GetMathFormulasCount, GetPhysFormulasCount

} from "../../wailsjs/go/main/App.js";
import FormulaDetails from "../tools/formulaDetails.jsx";
import invoke from '@wailsapp/runtime';
import {useEffect, useState} from "react";
import {Button, Divider, List} from "antd";
import {LogPrint} from "../../wailsjs/runtime/runtime.js";
import {GetMathFormulaByIndex} from "../../wailsjs/go/main/App.js";

const PhysFormulasFrontend = () => {

    const [formula, setFormula] = useState(null);
    const [currentFormulaIndex, setCurrentFormulaIndex] = useState(0);



    useEffect(()=>{

    }, [currentFormulaIndex])

    const fetchPhysFormula = async () => {
        try {
            if (currentFormulaIndex < 2){
                const result = await GetPhysFormulaByIndex(currentFormulaIndex); // Вызов Go функции
                setFormula(result);  // Устанавливаем результат в состояние
            }

        } catch (error) {
            LogPrint('Ошибка при получении формулы:', error);
        }}

    fetchPhysFormula();

    const handleNextFormula = () => {
        if (currentFormulaIndex < 2) {
            setCurrentFormulaIndex(currentFormulaIndex+1);
            fetchPhysFormula();// Обновляем индекс
        } else{
            setCurrentFormulaIndex(0)
            fetchPhysFormula();
        }
    };

    return (
        <div>
            <FormulaDetails formula={formula}/> {/* Передаем текущую формулу в компонент */}
            <Button onClick={handleNextFormula}/>
        </div>
    );
};


export default PhysFormulasFrontend;