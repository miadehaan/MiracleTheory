const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const cors = require("cors")({origin: true});
admin.initializeApp();

// create a transporter to send the email
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "miracleTheoryCommunity@gmail.com",
        pass: "yourgmailaccpassword"
    }
});

exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        // getting dest email by query string
        const dest = req.query.dest;

        const mailOptions = {
            from: "Miracle Theory <miracleTheoryCommunity@gmail.com>",
            to: dest,
            subject: "Someone has submitted their story through your website!",
            html: `
                <h1> New Story </h1>
                <p style="font-size: 16px;"> 
                    Please see the contact information &
                    message below regarding a new story to share on MT.
                </p>
                <br />
                <p style="font-size: 10px;"> Sent via Firebase & Nodemailer </p>
            ` // email content in HTML
        };

        // returning result
        return transporter.sendMail(mailOptions, (error, info) => {
            if(error){
                return res.send(error.toString());
            }
            return res.send("Email Sent");
        });


    });
});
