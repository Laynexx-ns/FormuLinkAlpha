export namespace formulas {
	
	export class Formula {
	    Name: string;
	    Expression: string;
	    Description: string;
	
	    static createFrom(source: any = {}) {
	        return new Formula(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Name = source["Name"];
	        this.Expression = source["Expression"];
	        this.Description = source["Description"];
	    }
	}

}

