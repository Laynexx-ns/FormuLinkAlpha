package formulas

import "context"

var MathFormulas = []Formula{
	{
		Name:        "Площадь треугольника через синус угла",
		Expression:  "S = (a*b*sin(c))/2",
		Description: "Площадь треугольника равна половине произведения двух сторон на синус угла между ними",
	},
	{
		Name:        "Простейшая формула площади треугольника",
		Expression:  "S = ah/2",
		Description: "Площадь треугольника равна половине произведения основания на высоту проведенную к нему",
	},
}

func GetFormulaByIndex(ctx context.Context, index int) Formula {
	if index >= 0 && index < len(MathFormulas) {
		return MathFormulas[index]
	}
	return Formula{}
}
