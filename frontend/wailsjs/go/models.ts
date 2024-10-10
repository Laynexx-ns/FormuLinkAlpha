export namespace formulas {
	
	export class Formula {
	    name: string;
	    expression: string;
	    description: string;
	
	    static createFrom(source: any = {}) {
	        return new Formula(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.name = source["name"];
	        this.expression = source["expression"];
	        this.description = source["description"];
	    }
	}

}

