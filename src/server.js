import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const loggerMiddleware = morgan("dev");

const handelHome = (req, res) => {
    return res.send("<h1>I love middleware</h1>");
};
const login = (req, res) => {
    return res.send("<h1>login</h1>");
}

app.use(loggerMiddleware);
app.get("/", handelHome);
app.get("/login", login);

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);

