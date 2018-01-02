const Table = require('cli-table');
const filePath = process.argv[2];

function makeTable(arr) {
	const head = Object.keys(arr[0]);
  const body = arr.map(o => Object.keys(o).map(key => o[key]));
	const table = new Table({ head });
  body.forEach(b => table.push(b));
  return table;
}

function main(filePath) {
	const data = require(filePath);
  const output = makeTable(data);
  console.log(output.toString());
}

main(filePath);
