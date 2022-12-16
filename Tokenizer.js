class Tokenizer {


    init(string) {
        this._string = string;
        this._cursor = 0;
    }

    hasMoreToken() {
        return this._cursor < this.string.length;
    }


    getNextToken() {
        if (!this.hasMergeTokens()) {
            return null;
        }

        const string = this._string.slice(this._cursor)

        if (!Number.isNaN * (string[0])) {
            let number = ``;

            while (!Number.isNaN(string[this._cursor])) {
                number += string[this._cursor++];
            }

        }

        return


    }
}




module.exports = {
    Tokenizer,
}