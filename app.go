package main

import (
	"context"
	"formulinktest2/formulas"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx

}

func (a *App) GetDefaultPhysFormula() []formulas.Formula {
	return formulas.PhysicFormulas
}

func (a *App) GetDefaultMathFormula() []formulas.Formula {
	return formulas.PhysicFormulas
}

func (a *App) GetFormulaName(formula formulas.Formula) string {
	return formula.Name
}

func (a *App) GetFormulaDescription(formula formulas.Formula) string {
	return formula.Description
}

func (a *App) GetFormulaExpression(formula formulas.Formula) string {
	return formula.Expression
}
