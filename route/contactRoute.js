const router = require('express').Router()
const nodemailer = require('nodemailer')

router.post('/contact', (req,res) => {
    let data = req.body 
    if (data.name.length === 0 || data.email.length === 0 || data.message.length === 0 ) {
        return res.json({msg: 'Please fill in all blank fields.'}) 
    }
        let smtpTransporter = nodemailer.createTransport({
            service: 'Gmail',
            port: 465,
            auth:{
                user: 'christo.graham1@gmail.com',
                pass: 'zjcjrpdszmyenkdy'
            }
        })
        let mailOptions = {
            from: data.email,
            to: 'christo.graham1@gmail.com',
            subject: `New Message From ${data.name}`,
            html: `
            <h3>Information<h3/>
            <ul> 
            <li>Name: ${data.name}<li/>
            <li>Email: ${data.email}<li/>
            </ul>
            <h3>Message<h3/>
            <p>${data.message}<p/>
            `
        }
        smtpTransporter.sendMail(mailOptions, (error)=> {
            try {
                if(error) return res.status(400).json({msg: 'Please fill in blank fields.'})
                res.status(200).json({msg: 'Thank you for reaching out!'})
            } catch (error){
                if(error) return res.status(500).json({msg: "There seems to be a server error."})
            }
        })
})
module.exports=router