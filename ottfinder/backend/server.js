import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import movieRoutes from "./routes/movieRoutes.js"

dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));
app.use(express.json());

app.use("/api/movie", movieRoutes)

const PORT = process.env.PORT || 5000;


app.get("/", (req,res) => {
    res.send(" api is listening");
})

app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);
})

