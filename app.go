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

func (a *App) GetPhysFormulas() []formulas.Formula {
	return formulas.PhysicFormulas
}

func (a *App) GetMathFormulas() []formulas.Formula {
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

func (a *App) GetTestFuncDescription() string {
	return "it's working - description"
}

func (a *App) GetPhysFormulaByIndex(i int) formulas.Formula {
	return formulas.PhysicFormulas[i]
}

func (a *App) GetMathFormulasCount() int {
	return len(formulas.MathFormulas)
}

func (a *App) GetPhysFormulasCount() int {
	return len(formulas.PhysicFormulas)
}
