import { useEffect, useState } from 'react';
import {Card, Divider, List, Typography} from "antd";
import {GetDefaultPhysFormula, GetDefaultMathFormula} from "../wailsjs/go/main/App.js";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import MathFormulasFrontend from "./formulasFrontend/mathFormulasFrontend.jsx";


const FormulaGrid = ({ formulas }) => (
    <List
        grid={{ gutter: 16, column: 2 }}
        dataSource={formulas}
        renderItem={(item, index) => (
            <List.Item key={index}>
                <Card title={item.Name} style={{ width: '100%' }}>
                    {/* Используем MathJax для отображения формулы */}
                    <MathJaxContext>
                        <MathJax dynamic>
                            <p>{`\\(${item.Expression}\\)`}</p> {/* Используем синтаксис для математических формул */}
                        </MathJax>
                    </MathJaxContext>
                    <p>{item.Description}</p>
                </Card>
            </List.Item>
        )}
    />
);

function App() {
    const [mathFormulas, setMathFormulas] = useState([]);
    const [physFormulas, setPhysFormulas] = useState([]);

    const getmath = GetDefaultMathFormula();
    const getphys = GetDefaultPhysFormula();

    useEffect(() => {
        console.log("qweqwerqwerqwer");
        setMathFormulas(getmath);
        setPhysFormulas(getphys);
    }, []);


    return (
        <div id="App" style={{ padding: 20 }}>
            <Typography.Title level={5} style={{ margin: 10 }}>
                Math Formulas:
            </Typography.Title>
            <MathFormulasFrontend/>

            <Typography.Title level={5} style={{ margin: 10, marginTop: 30 }}>
                Physics Formulas:
            </Typography.Title>
            <MathFormulasFrontend/>
        </div>
    );
}

export default App;

