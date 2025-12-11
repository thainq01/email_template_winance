const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

// Configuration placeholders - fill these in later
const smtpServer = "smtp.gmail.com"; // e.g., smtp.gmail.com
const smtpPort = 587; // Use 465 for SSL, 587 for TLS
const appPassword = "cjam umsd wppu efye";
const fromEmail = "thainguyen12.work@gmail.com"; // Your Gmail address
const toEmail = "thainguyen12.social@gmail.com";

// Read the HTML content from close.html
const htmlContent = fs.readFileSync(path.join(__dirname, "tp.html"), "utf8");

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: smtpServer,
  port: smtpPort,
  secure: smtpPort === 465, // true for 465, false for other ports
  auth: {
    user: fromEmail,
    pass: appPassword,
  },
});

// Winance: Your trade has opened

// Winance: Your trade has closed

// Winance: Stop Loss triggered

// Winance: Take Profit triggered

// Winance: Position liquidated

// Winance: Stop Loss / Take Profit executed

// Winance: Trade partially closed

// Winance: Trade update available

// Email options
const mailOptions = {
  from: fromEmail,
  to: toEmail,
  subject: "Winance: tp",
  html: htmlContent,
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error sending email:", error);
  } else {
    console.log("Email sent successfully:", info.response);
  }
});
