const express = require('express');
const session = require('express-session');
const server = express();
const port = process.env.PORT || 5000;

server.use('/', express.static('../client/build'));
server.use(session({
    secret: 'bookmarked repos',
    resave: true,
    saveUninitialized: true
}));

// Get all bookmarked repos
server.get('/bookmarks', function (req, res) {
    const repos = req.session.repos;

    if (!repos) {
        req.session.repos = [];
    }

    res.json(repos);
});

// Clear the bookmarked repos
server.get('/bookmarks/reset', function (req, res) {
    req.session.repos = null;
    res.send('Session repo bookmarks reset');
});

server.get('/bookmark', function (req, res) {
    const repos = req.session.repos;

    // find the clicked repo
    const repo = req.session.repos.find((repo) => {
        return repo.id == req.query.id;
    });

    if (!repo) {
        // Repo not found in bookmarked repos, add it
        req.session.repos.push(req.query);
    } else {
        // Return a new array of repos without the removed repo
        req.session.repos = repos.filter((obj) => {
            return repo.id != obj.id;
        });
    }

    res.json(req.session.repos);
});

server.listen(port, () => console.log(`Server listening on port ${port}!`));