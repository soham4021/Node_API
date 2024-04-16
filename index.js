import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js"

const app = express(); //initialize express
const PORT = 5000;

app.get("/", (req, res) => {res.send("Hello from home page")})
app.use(bodyParser.json());
app.use("/users", usersRoutes);

app.listen(PORT, () => {
	console.log("Server running on PORT ", PORT);
});
