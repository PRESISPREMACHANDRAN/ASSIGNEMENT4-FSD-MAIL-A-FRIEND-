const express=require('express')
const app=express();
const port=5000
const nodemailer=require('nodemailer')

function sendEmail(){
    return new Promise((resolve,reject)=>{
        var transporter=nodemailer.createTransport({
                service:'gmail',
                auth:{
                        user:'presisudha12345@gmail.com',
                        pass:'ipestmmcumzlimwr'
                }
        })
    const mail_configs={
        from:'presisudha12345@gmail.com',
        to:'presispremachandran@gmail.com',
        subject:'testing coding 101 email',
        text:"just checking if this email will be sent"
    }
    transporter.sendMail(mail_configs,function(error,info){
        if(error){
            console.log(error)
            return reject({message:`An error has occured`})
        }
        return resolve({message:"email sent successfully"})
    })   
    })
}

app.get('/',(req,res)=>{
    sendEmail()
    .then(response =>res.send(response.message))
    .catch(error=>res.status(500).send(error.message))
})


app.listen(port,()=>{
    console.log(`nodemailer project is listening at http://localhost:${port}`)
})