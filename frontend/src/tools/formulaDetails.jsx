import { useEffect, useState } from "react";
import { Button, Card, Divider, Typography } from "antd";
import { GetFormulaDescription, GetFormulaName, GetFormulaExpression } from "../../wailsjs/go/main/App.js";

const FormulaDetails = ({ formula }) => {  // Принимаем пропс formula

    const [formulaName, setFormulaName] = useState("__");
    const [formulaDescription, setFormulaDescription] = useState("__");
    const [formulaExpression, setFormulaExpression] = useState("__");

    useEffect(() => {
        const fetchDescription = async () => {
            if (formula) {
                try {
                    const description = await GetFormulaDescription(formula);
                    setFormulaDescription(description);

                    const name = await GetFormulaName(formula);
                    setFormulaName(name);

                    const expression = await GetFormulaExpression(formula);
                    setFormulaExpression(expression);
                } catch (error) {
                    console.error("Ошибка при получении описания:", error);
                }
            }
        };
        fetchDescription();
    }, [formula]);

    return (
        <Card
            title={<Typography.Title level={3}>{formulaName}</Typography.Title>}
            bordered={true}
            style={{
                margin: "10px",
                border: "1px solid #f0f0f0",
                borderRadius: "40px",
                padding: "10px",
                backgroundColor: "#f9f9f9"
            }}
        >
            <Typography.Text> Формула:</Typography.Text>
            <Typography.Title level={4} style={{ marginTop: "1px" }}>
                {formulaExpression}
            </Typography.Title>
            <Divider />
            <Typography.Text> Описание: </Typography.Text>
            <Typography.Paragraph style={{ marginTop: "1px" }}>
                {formulaDescription}
            </Typography.Paragraph>
        </Card>
    );
};

export default FormulaDetails;
