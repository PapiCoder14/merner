import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import productrouter from "./routes/product.js";
import userrouter from "./routes/user.js";
import cors from "cors";
import path from "path";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const server = express();

// Mongoose Connection
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Database Connected");
}

console.log("env", path.resolve(__dirname, process.env.DB_PASSWORD));
//sandeep , pearl2002
server.use(cors());
server.use(express.json());
server.use(express.static(process.env.PUBLIC_DIR));
server.use("/product", productrouter);
server.use("/user", userrouter);
server.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

server.listen(process.env.PORT);
