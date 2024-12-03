import db from '../db2.js';
import express from 'express';
import nodemailer from 'nodemailer';

// Hardcoded email credentials for sending verification emails
console.log('Test 1: Hardcoded email credentials');
const EMAIL_USER = "vidulpramitha2000@gmail.com";
const EMAIL_PASS = "cdse uste igza zboz";
console.log('EMAIL_USER:', EMAIL_USER);
console.log('EMAIL_PASS:', EMAIL_PASS ? 'Loaded' : 'Not Loaded');

// Function to handle email verification
const EmailVerifyModal = async (UserId, AdminId, Email, callback) => {
    console.log('Test 2: Inside EmailVerifyModal');

    // Function to generate a random verification key
    function generateKey(length) {
        console.log('Test 3: Inside generateKey');
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        console.log('Generated Key:', result);
        return result;
    } 

    // Function to send an email with the verification details
    async function sendEmail(to, userId, key) {
        console.log('Test 4: Inside sendEmail');
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: EMAIL_USER,
                pass: EMAIL_PASS
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        console.log('Test 5: Transporter created');

        let mailOptions = {
            from: EMAIL_USER,
            to: to,
            subject: "Verify The User Account in Library Management System of R/Kalawana National School",
            text: "Your Temporary Id is "+ userId +" and your Verifying Key is " + key + ". Now you can go to the verify email in login page and create your own account with username and password."
        };

        console.log('Test 6: Mail options created', mailOptions);

        try {
            let info = await transporter.sendMail(mailOptions);
            console.log('Email sent: ' + info.response);
        } catch (error) {
            console.error('Error sending email: ', error);
            throw error; // Re-throw the error so it can be caught where sendEmail is called
        }
    }

    const Key = generateKey(7);
    console.log('Test 7: Key generated', Key);

    const KeyInsertQuery = "UPDATE user SET VerifiedBy = ?, VerifyKey = ? WHERE UserId = ?;";
    console.log('Test 8: Query created', KeyInsertQuery);

    try {
        db.query(KeyInsertQuery, [AdminId, Key, UserId], async (err, result) => {
            console.log('Test 9: Inside db.query callback');
            if (err) {
                console.error('Error executing query:', err);
                callback(err, null);
                return;
            }

            console.log('Test 10: Query executed, result:', result);

            try {
                await sendEmail(Email, UserId, Key);
                console.log('Test 11: Email sent');
                callback(null, result);
            } catch (emailError) {
                console.error('Error sending email:', emailError);
                callback(emailError, null);
            }
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        callback(error, null);
    }
};

export { EmailVerifyModal };
