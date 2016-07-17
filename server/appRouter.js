var express = require('express');
var people = require('../data/people.json');
var peopleFilter = require('./utils/peopleFilter');

var router = express.Router();

router.get('/people/search/', function (req, res) {
    console.log('Received default search request');
    res.json({ people : people.slice(0,6)});
});

router.get('/people/search/:searchTerm', function (req, res) {
    var searchTerm = req.params.searchTerm;
    console.log('Received search request: ' + searchTerm);
    res.json({ people : peopleFilter(people, searchTerm)});
  
});
module.exports = router;
