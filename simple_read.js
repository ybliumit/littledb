var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

// init the data store
// ----------------------------
db.defaults({ posts: []}).write();

// read posts
// ----------------------------
console.log(db.get('posts').value());

console.log('Done reading data store!');