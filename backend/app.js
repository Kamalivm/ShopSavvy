require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const twilio = require("twilio");

const userRoutes = require("./Routes/userRoutes");
const productRoutes = require("./Routes/productRoutes");
const cartRoutes = require("./Routes/cartRoutes")

const app = express();
const PORT = process.env.PORT || 2000;

// Twilio credentials from .env file
const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Twilio Account SID
const authToken = process.env.TWILIO_AUTH_TOKEN;   // Your Twilio Auth Token
const twilioClient = twilio(accountSid, authToken);
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER; // Your Twilio Phone Number

// Enable CORS for all routes
app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//uploads
app.use('/uploads', express.static('uploads'));

// Routes
app.use("/", userRoutes);
app.use("/", productRoutes);
app.use("/", cartRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log("MongoDB Connection Error:", err));

// SMS Route - Send SMS after Payment
app.post("/send-sms", (req, res) => {
    const { phoneNumber, message } = req.body;

    if (!phoneNumber || !message) {
        return res.status(400).send({ message: "Phone number and message are required" });
    }

    // Sending SMS with Twilio
    twilioClient.messages.create({
        body: message,
        from: twilioPhoneNumber, // Your Twilio phone number
        to: phoneNumber, // The phone number to send the SMS to
    })
    .then((message) => {
        console.log("Message sent: ", message.sid);
        res.status(200).send({ message: "SMS sent successfully", sid: message.sid });
    })
    .catch((error) => {
        console.error("Error sending SMS: ", error);
        res.status(500).send({ message: "Failed to send SMS", error });
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
