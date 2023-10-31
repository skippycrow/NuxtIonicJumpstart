import express from "express";
// import { setRoutes } from "./routes/index.route";
import cors from "cors";
import morgan from "morgan";
// import { initServices } from "./services/index.service";
import { Server } from "socket.io";
import { createServer } from "http";
// import { onConnection } from "./socket";

const app = express();
const port = 8082;
const server = createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST", "OPTIONS", "PUT", "PATCH", "DELETE"],
//   },
// });

app.use(cors());
app.use(morgan("dev"));

app.use(express.json());

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello world and friends!");
});

// setRoutes(app);
// initServices();
// io.on("connection", onConnection(io));

// 404 page
app.get("*", (req, res, err) => {
  res.status(404).send("404: Page not Found");
});

// start the Express server
server.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
