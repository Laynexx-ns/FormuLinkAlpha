import {
    GetFormulaDescription,
    GetFormulaExpression,
    GetFormulaName,
    GetDefaultPhysFormula
} from "../../wailsjs/go/main/App.js";
import FormulaDetails from "../tools/formulaDetails.jsx";

const MathFormulasFrontend = () =>{
    const formula = GetDefaultPhysFormula()[0];


    return(
        <FormulaDetails formula={formula}/>
    )
}

export default MathFormulasFrontend