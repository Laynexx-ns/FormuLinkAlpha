import { useEffect, useState } from 'react';
import {Card, Divider, List, Typography} from "antd";
import {GetDefaultPhysFormula, GetDefaultMathFormula, GetTestFuncDescription} from "../wailsjs/go/main/App.js";
import MathFormulasFrontend from "./formulasFrontend/mathFormulasFrontend.jsx";


function App() {



    return (
        <div id="App" style={{ padding: 20 }}>
            <Typography.Title level={5} style={{ margin: 10 }}>
                Math Formulas:
            </Typography.Title>
            <MathFormulasFrontend/>
            <Divider/>
            <Typography.Title level={5} style={{ margin: 10, marginTop: 30 }}>
                Physics Formulas:
            </Typography.Title>
            <MathFormulasFrontend/>

        </div>
    );
}

export default App;

