var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

// init the data store
// ----------------------------
db.defaults({ posts: []}).write();

// add post
// ----------------------------
db.get('posts')
  .push({ id: 5, title: 'boston', published:'false'})
  .write()

db.get('posts')
  .push({ id: 6, title: 'NYC', published:'true'})
  .write()

db.get('posts')
  .push({ id: 7, title: 'DC', published:'true'})
  .write()  

console.log('Done writing to data store!');
