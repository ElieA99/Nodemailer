//declaring the used packages 
var nodemailer = require('nodemailer');
var color = require('colors');

var transporter = nodemailer.createTransport({
    service: 'gmail', //the service used
    auth:
    {
        user:'###' ,//enter your gmail between the ''
        pass:'###', //enter your password between the ''
    }
    
});

//mail sending part
var mailOptions = {
    from: '###', // your email too here
    to: '###', // the one you need to send to
    subject: 'NODE.JS MAIL SENDER',//the subject for the mail
    text: 'Hello,a test to send an e-mail with nodejs',//the needed text to send
};

transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(Error.red);
    }
    else{
        console.log('Email sent: '+info.response.green);
    }
});
