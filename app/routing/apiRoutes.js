// DEPENDENCIES
var path = require("path");
var friends = require("../data/friends")

// MODULE TO EXPORT
module.exports = function (app) {
    app.get("/api/friends", function(req, res) {
        return res.json(friends());
    });
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        friends(newFriend);
        res.send(newFriend);
    });
}

