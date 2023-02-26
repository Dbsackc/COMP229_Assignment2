let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
//create a reference to the db Schema which is the model
let BusinessContact = require('../models/businessContacts');

//we want to display the Business Contact List
module.exports.displayBusinessContactList = (req, res, next) => {
    if(!req.user)
    {
        res.render('auth/login',
        {
            title: "Login",
            messages:req.flash('loginMessage'),
            displayName:req.user?req.user.displayName:''
        })
    }
    else
    {
        BusinessContact.find().sort({name:1}).exec((err, businessContact) => {
            if (err) {
                return console.error(err);
            }
            else {
                res.render('businesscontact/list', {title: 'Business Contacts', BusinessContact:businessContact, displayName:req.user ? req.user.displayName:''});
            }
        });
    }
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('businesscontact/add', {title: 'Add business contact', displayName:req.user ? req.user.displayName:''});
};

module.exports.processAddPage = (req, res, next) => {
    let newBusinessContact = BusinessContact({
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email,
    });
    BusinessContact.create(newBusinessContact, (err,BusinessContact) => {
        if(err)
            {
                console.log(err);
                res.end(err);
            }
        else
            {
                res.redirect('/businesscontact')
            }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;
    BusinessContact.findById(id, (err,businessContactToEdit) => {
        if(err)
            {
                console.log(err);
                res.end(err);
            }
        else   
            {
                res.render('businesscontact/edit', {title:'Edit Business Contact',businesscontact:businessContactToEdit});
            }
    })
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;
    let updatedBusinessContact = BusinessContact({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email,
    });
    BusinessContact.updateOne({_id:id}, updatedBusinessContact, (err) => {
        if(err)
            {
                console.log(err);
                res.end(err);
            }
        else   
            {
                res.redirect('/businesscontact');
            }
    });

}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id
    BusinessContact.remove({_id:id}, (err)=>{
        if(err)
            {
                console.log(err);
                res.end(err);
            }
        else   
            {
                res.redirect('/businesscontact');
            }
    });
}