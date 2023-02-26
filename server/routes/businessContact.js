let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
let businessContactController = require('../controllers/businessContact');
//helper function for guard purposes
function requireAuth(req,res,next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

//connect to our book model
let businessContact = require('../models/businessContacts');

//get ROUTE for the book list page - READ OPERATION
router.get('/', businessContactController.displayBusinessContactList);

//GET Route for displaying the Add Page- CREATE Operation 
router.get('/add', businessContactController.displayAddPage);

//POST Route for processing the Add Page - CREATE Operation
router.post('/add', businessContactController.processAddPage);

//GET Route for displaying the Edit Page - UPDATE Operation
router.get('/edit/:id', businessContactController.displayEditPage);

//POST Route for processing the Edit Page - Update Operation
router.post('/edit/:id', businessContactController.processEditPage);

//GET to perform Deletion - DELETE Operation
router.get('/delete/:id', businessContactController.performDelete);

module.exports = router;