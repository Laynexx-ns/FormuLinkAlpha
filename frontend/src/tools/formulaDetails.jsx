import {useEffect, useState} from "react";
import {Card, Divider, Typography} from "antd";

const FormulaDetails = ({formula}) => {
    const [formulaName, setFormulaName] = useState('');
    const [formulaExpression, setFormulaExpression] = useState('');
    const [formulaDescription, setFormulaDescription] = useState('');

    useEffect(() => {
        if (formula) {
            setFormulaName(formula.Name);
            setFormulaExpression(formula.Expression);
            setFormulaDescription(formula.Description);
        }
    }, [formula]);

    return (
        <Card
            title={<Typography.Title level={4}>Формула силы</Typography.Title>}
            bordered={false}
            style={{
                margin: "1%",
                border: "1px solid #f0f0f0",
                borderRadius: "8px",
                padding: "16px",
                backgroundColor: "#f9f9f9"
            }}
        >
            <Typography.Text strong>Формула:</Typography.Text>
            <Typography.Title level={5} style={{marginTop: "10px"}}>
            {/*    formulaExpression*/}
                F = ma
            </Typography.Title>

            <Divider/>

            <Typography.Text strong>Описание:</Typography.Text>
            <Typography.Paragraph style={{marginTop: "10px"}}>
                Сила - ньютоны, масса - килограмы, а - ускорение
            </Typography.Paragraph>
        </Card>
    );
};

export default FormulaDetails;

