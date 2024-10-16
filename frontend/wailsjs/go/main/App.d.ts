// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {formulas} from '../models';

export function GetFormulaDescription(arg1:formulas.Formula):Promise<string>;

export function GetFormulaExpression(arg1:formulas.Formula):Promise<string>;

export function GetFormulaName(arg1:formulas.Formula):Promise<string>;

export function GetMathFormulaByIndex(arg1:number):Promise<formulas.Formula>;

export function GetMathFormulas():Promise<Array<formulas.Formula>>;

export function GetMathFormulasCount():Promise<number>;

export function GetPhysFormulaByIndex(arg1:number):Promise<formulas.Formula>;

export function GetPhysFormulas():Promise<Array<formulas.Formula>>;

export function GetPhysFormulasCount():Promise<number>;

export function GetTestFuncDescription():Promise<string>;
