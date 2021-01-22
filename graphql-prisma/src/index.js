import "@babel/polyfill/noConflict";
import server from "./server";

server.express.get("/", (req, res) => {
  res.send("hello");
});

server.start(
  {
    port: process.env.PORT || 4000,
    endpoint: "/graphql",
    playground: "/playground",
  },
  () => {
    console.log("The server is up!");
  }
);
