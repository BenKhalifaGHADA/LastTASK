const express=require('express')

const router= express.Router()
const Contact= require('../models/contact')


router.get('/', (req, res)=>{
    Contact.find().then(contacts=>res.send(contacts))
})

router.post('/newcontact', (req, res)=>{
    let added=req.body
    const newcontact=new Contact({
        name: added.name,          // this = {name, phone, email} = req.body instead of typing : added= req.body
        phone: added.phone,        //
        email: added.email         //
    })
    newcontact.save().then(newcontactadded=>res.send(`${newcontactadded} added`)).catch(err=> res.send("contact failed to be created"));
})

router.delete('/removecontact/:id', (req, res)=>{
    let contactID=req.params.id;
    Contact.findOneAndDelete({_id: contactID}).then(removed=>res.send("contact deleted")).catch(err=>res.send("deletion failed"))
})

router.put('/updatecontact/:id', (req, res)=>{
    let contactID=req.params.id
    const {name, phone, email}= req.body
    Contact.findOneAndUpdate({_id: contactID}, {$set: {name, phone, email}}).then(updated=>res.send(updated)).catch(err=>res.send("failed to update"))
})


module.exports=router