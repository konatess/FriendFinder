// DEPENDENCIES
var path = require("path");
var friends = require("././data/friends.js")

// MODULE TO EXPORT
module.exports = function (app) {
    app.get("/api/friends", function(req, res) {
        return res.json(friends.friendsArr);
    });
    // app.post("/api/friends", function(req, res) {
    //     return res.json(characters);
    // });
}

