
const { Tokenizer } = require('./Tokenizer');

class Parser {

    Parse(string) {

        this._string = string;

        return this.program();

    }



    Proram() {
        return this.NumericLiteral();
    }


    NumericLiteral() {
        return {
            type: 'NumericLiteral',
            value: Number(this._string)
        };
    }



}







module.exports = {
    Parser
}