import {useEffect, useState} from "react";
import {Button, Card, Divider, Typography} from "antd";
import {GetFormulaDescription, GetDefaultPhysFormula, GetFormulaName, GetFormulaExpression} from "../../wailsjs/go/main/App.js";
import invoke  from '@wailsapp/runtime'

const FormulaDetails = ({formula}) => {

    const [formulaName, setFormulaName] = useState("__")
    const [formulaDescription, setFormulaDescription] = useState("__");
    const [formulaExpression, setFormulaExpression] = useState("__")


    // Функция для вызова Go метода (предполагаю, что invoke используется для вызова Go функций)
    const fetchDescription = async () => {
        try {
            const description = await GetFormulaDescription(formula);
            setFormulaDescription(description);
            const name = await GetFormulaName(formula);
            setFormulaName(name)
            const expression = await GetFormulaExpression(formula);
            setFormulaExpression(expression)

        } catch (error) {
            console.error("Ошибка при получении описания:", error);
        }
    };


    return (
        <Card
            title={<Typography.Title level={3}>Формула силы</Typography.Title>}
            bordered={true}
            style={{
                margin: "10px",
                border: "1px solid #f0f0f0",
                borderRadius: "40px",
                padding: "10px",
                backgroundColor: "#f9f9f9"
            }}
        >
            <Typography.Text strong>Формула:</Typography.Text>
            <Typography.Title level={4} style={{marginTop: "1px"}}>
                {formulaExpression}
            </Typography.Title>

            <Divider/>
            <Button type={"primary"} onClick={fetchDescription} style={{margin: "10px", width: "400px", backgroundColor: "#b376b8"}}>
                Описание
            </Button>
            <Typography.Text strong>Описание:</Typography.Text>
            <Typography.Paragraph style={{marginTop: "1px"}}>
                {formulaDescription}
            </Typography.Paragraph>
        </Card>
    );
};

export default FormulaDetails;

