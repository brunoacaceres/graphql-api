import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";
import mongoose from 'mongoose';

const app = express();

mongoose.Promise = global.Promise;
mongodb://192.168.52.128:27017/ecattle-kernel
mongoose.connect('mongodb://mongo:ecattle2019@ds163255.mlab.com:63255/ecattle-kernel', {useNewUrlParser: true});
// mongoose.connect('mongodb://192.168.52.100:27017/ecattle-kernel');  
app.get("/", (req, res) => {
  return res.json({
    msg: "Welcome to GraphQL World!!"
  });
});
app.use(
  "/api",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.listen(5000, () => {
  console.log("App is running on PORT 5000");
});
