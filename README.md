# json2table
Small cli utility for parsing json to a table on stdout.

# requirements
- nodeJS (to run index.js - otherwise use included binary)
- json payload has to be an array of objects

# use case
Parsing json in logs into human redable table, like kibana

# install
Only required to run index.js 

```bash
$ git clone [repo]
$ npm i
# optional
$ echo "alias json2table='path/to/index.js'" > .bash_profile # or put binary in your $PATH
```

# usage
```bash
# read from file
$ ./json2table [absolute/path/to/file]
# read from stdin
$ [pbpaste | cat $FILE] | json2table
```

# todos
- [x] enable piping data
- [ ] publish on npm?
- [ ] remove array of objects requirement

# license
MIT
