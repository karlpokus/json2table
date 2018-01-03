# json2table
Small cli utility for parsing json to a table. Requires nodeJS and json payload to be an array of objects. Great for copying text from kibana and piping into a readable table.

# install
```bash
$ git clone [repo]
$ npm i
# optional
$ echo "alias json2table='path/to/executable'" > .bash_profile
```

# usage
```bash
# read from file
$ ./index.js [absolute/path/to/file]
# read from pipe
$ [pbpaste | cat $FILE] | json2table
```

# todos
- [x] enable piping data
- [ ] publish on npm?
- [ ] remove array of objects requirement

# license
MIT
