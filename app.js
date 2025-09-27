import express from 'express';
import uploadStream from "./uploadFile.js";
import configCloudinary from './config.js';
import nodemailer from 'nodemailer';
const app = express();
import dotenv from 'dotenv'
import path from 'path';
import { fileURLToPath } from "url";
import multer from "multer";
app.use(express.json());
app.use(express.urlencoded({extended: true}));
dotenv.config('./.env')

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')));

const storage = multer.memoryStorage();
const upload = multer({ storage });


app.get('/', (req, res) => {
    res.render('index');
})

app.post('/upload', upload.single('inputField'), async (req, res) => {
    const uploaded = await uploadStream(req.file.buffer, req.file.originalname);
    console.log(uploaded)
    const public_url = uploaded

    const auth = nodemailer.createTransport({
        service: "gmail",
        secure : true,
        port : 465,
        auth: {
            user: process.env.GMAIL,
            pass: process.env.PASSWORD
    
        }
    });
    
    const receiver = {
        from : "chandorasumit1234@gmail.com",
        to : `${req.body.emailReceiver}`,
        subject : "Sharing File!",
        text : `${public_url}`
    };
    
    auth.sendMail(receiver, (error, emailResponse) => {
        if(error)
        throw error;
        console.log("success!");
        res.send("success");
    });
})

app.listen(1000, () => {
    configCloudinary();
    console.log("Server is runnning.");
})

