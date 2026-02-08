import express from "express";
import cors from "cors";


const app = express();

const PORT = 8000;

app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.send('Hi!')
})

app.listen(PORT, () => {
    console.log("Running")
});