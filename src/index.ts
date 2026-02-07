import express from "express";
import { json } from "node:stream/consumers";


const app = express();
app.use(express.json());
const PORT = 8000;


app.get("/", (req, res) => {
    res.send('Hi!')
})

app.listen(PORT, () => {
    console.log("Running")
});