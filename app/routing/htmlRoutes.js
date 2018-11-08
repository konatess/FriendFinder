// DEPENDENCIES
var path = require("path");

// MODULE TO EXPORT
module.exports = function (app) {
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "/survey.html"));
    });
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "/home.html"));
    });
}