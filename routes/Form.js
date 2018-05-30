const express = require('express') ;
const router = express.Router();
const Form = require('../models/Form');

router.post('/form' , (req, res) => {
	    if(!req.body.FormDescription) {
        return res.status(400).send({
            message: "Form FormDescription can not be empty"
        });
    }

    // Create a Form
    const form = new Form({
        FormTitle: req.body.FormTitle || "Untitled Form", 
        FormDescription: req.body.FormDescription
    });

    // Save Form in the database
    form.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the form."
        });
    });

})

router.get('/form',(req, res) => {
    Form.find()
    .then(forms => {
        res.send(forms);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving forms."
        });
    });
})


router.get('/forms/:formId',(req, res) => {
    Form.findById(req.params.formId)
    .then(form => {
        if(!form) {
            return res.status(404).send({
                message: "Form not found with id " + req.params.formId
            });            
        }
        res.send(form);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Form not found with id " + req.params.formId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving form with id " + req.params.formId
        });
    });
})

router.put('/forms/:formId',(req, res) => {
    // Validate Request
    if(!req.body.FormTitle) {
        return res.status(400).send({
            message: "Form title can not be empty"
        });
    }

    // Find form and update it with the request body
    Form.findByIdAndUpdate(req.params.formId, {
        FormTitle: req.body.FormTitle || "Untitled Form",
        FormDescription: req.body.FormDescription
    }, {new: true})
    .then(form => {
        if(!form) {
            return res.status(404).send({
                message: "Form not found with id " + req.params.formId
            });
        }
        res.send(form);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Form not found with id " + req.params.formId
            });                
        }
        return res.status(500).send({
            message: "Error updating form with id " + req.params.formId
        });
    });
})


router.delete('/forms/:formId',(req, res) => {
    Form.findByIdAndRemove(req.params.formId)
    .then(form => {
        if(!form) {
            return res.status(404).send({
                message: "Form not found with id " + req.params.formId
            });
        }
        res.send({message: "Form deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Form not found with id " + req.params.formId
            });                
        }
        return res.status(500).send({
            message: "Could not delete form with id " + req.params.formId
        });
    });
})

module.exports = router;