const { Users, Blogs, Messages } = require('./db.js');
const { urlencoded } = require('body-parser');
const { json } = require('body-parser');
const cors = require('cors');
const express = require('express');

var db = {
    Users: new Users(),
    Blogs: new Blogs(),
    Messages: new Messages()
};

var app = express();

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use(json())
app.use(urlencoded({
    extended: true
}));


app.get('/getUser/:id', function(req, res) {
    res.json(db.Users.Find(parseInt(req.params.id)));
});

app.get('/getBlog/:id', function(req, res) {
    let id = parseInt(req.params.id);
    let blog = db.Blogs.Find(id);
    let owner = db.Users.Find(parseInt(blog.ownerId));
    let messages = db.Messages.GetMessagesToBlog(id);

    res.json({
        owner,
        messages,
        ...blog
    });
});

app.post('/file', (req, res) => {
    console.log(req.body);
});




app.listen(process.env.PORT || 8080);

console.log(8080)