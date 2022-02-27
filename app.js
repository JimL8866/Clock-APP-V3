import express from "express";
import path from "path";
import {fileURLToPath} from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const app = express();

app.use(express.static("./public"))

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "/public/clock.html"))
})

app.listen(80, ()=>console.log("server is currently running on port 80"))