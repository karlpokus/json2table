#!/usr/bin/env node

const Table = require('cli-table');
let data = '';

function makeTable(arr) {
	const head = Object.keys(arr[0]);
  const body = arr.map(o => Object.keys(o).map(key => o[key]));
	const table = new Table({ head });
  body.forEach(b => table.push(b));
  return table;
}

function parseInput(cb) {
	if (process.stdin.isTTY) {
		data = require(process.argv[2]);
		cb(null, data);
	} else {
		process.stdin
			.on('data', chunk => data += chunk)
			.on('end', () => cb(null, JSON.parse(data)));
	}
}

parseInput((err, data) => console.log(makeTable(data).toString()));
