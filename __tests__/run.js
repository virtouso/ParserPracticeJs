


const { Parser } = require('../Parser');

const parser = new Parser();

const program = `42`;


const ast = parser.Parse(program);

console.log(JSON.stringify(ast, null, 2));

