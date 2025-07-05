const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);

server.use("/images", jsonServer.static(path.join(__dirname, "public/images")));

server.use(router);

const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
