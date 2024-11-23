import dotenv from "dotenv"
dotenv.config()
import connectDB from "./src/db/index.js"
import { app } from "./app.js";
import router from "./src/routes/todos.routes.js";

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api/v1/", router);

connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
        });
    })
    .catch(err => {
        console.error("ERROR OCCURED !!!", err)
    })