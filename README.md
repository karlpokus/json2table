# json2table
Small cli utility for parsing json to a table. Requires nodeJS and json payload to be array of objects.

# install
```bash
$ git clone [repo]
$ npm i
```

# usage
Simple
```bash
$ ./index.js [absolute/path/to/file]
```
Parsing data from kibana
```bash
$ echo "alias json2table='path/to/executable'" > .bash_profile
# copy text
$ pbpaste > $FILENAME
$ json2table $FILENAME
```

# license
MIT
