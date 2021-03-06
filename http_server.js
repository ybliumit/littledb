// add http server
// -----------------------
// YOUR CODE
var express = require('express');
var app = express();

var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

// configure express to serve static files from public directory
// ------------------------------------------------------------------
// YOUR CODE

app.use(express.static('public'));

// init the data store
db.defaults({ posts: []}).write();

// list posts
app.get('/data', function(req, res){     

    // YOUR CODE
    req.setEncoding(db.get('posts').value());

});

// ----------------------------------------------------
// add post - test using:
//      curl http://localhost:3000/posts/ping/1/false
// ----------------------------------------------------

// have the ":" made them in to parameter, instead of static values
//********************************** */

app.get('/posts/:title/:id/:published', function(req, res){

    // YOUR CODE
    var post = {
        "title" : req.params.title,
        "id"    : req.params.id,
        "published" : req.params.published
    };
    db.get('posts').push(post).write();
    console.log(db.get('posts').value());  
    res.send(db.get('posts').value());

});


// ----------------------------------------------------
// filter by published state - test using:
//      curl http://localhost:3000/published/true
// ----------------------------------------------------
app.get('/published/:boolean', function(req, res){

    // YOUR CODE

});

// ----------------------------------------------------
// update published value - test using:
//      curl http://localhost:3000/published/1/true
// ----------------------------------------------------
app.get('/published/:id/:boolean', function(req, res){

    // YOUR CODE

});

// ----------------------------------------------------
// delete entry by id - test using:
//      curl http://localhost:3000/delete/5
// ----------------------------------------------------
app.get('/delete/:id/', function(req, res){

    // YOUR CODE

});

// start server
// -----------------------
// YOUR CODE
app.listen(3000, function(){
    console.log('running at port 3000')
})