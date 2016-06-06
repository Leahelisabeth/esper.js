'use strict';


class EvaluatorInstruction {
	static branch(kind, ast, scope, extra) {
		let ei = new EvaluatorInstruction('branch');
		ei.kind = kind;
		ei.ast = ast;
		ei.scope = scope;
		ei.extra = extra;
		return ei;
	}

	static getEvaluator() {
		return new EvaluatorInstruction('getEvaluator');
	}

	constructor(type) {
		this.type = type;
	}
}

module.exports = EvaluatorInstruction;
