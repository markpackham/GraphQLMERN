const express = require("express");
const colors = require("colors");
const cors = require("cors");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

const app = express();

// Connect to Mongo Database in .env
connectDB();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`Server running on port ${port}`));

// Example of get client name & email
// location http://localhost:5000/graphql
// {
//   client(id: "1"){
//     name,
//     email
//   }
// }

// Get all projects descriptions and names
// {
//   projects{
//     name
//     description
//   }
// }

// Relation ship query, between Project and Client get client name of a project
// {
//   project(id: "1"){
//     name
//     status
//     client{
//       name
//     }
//   }
// }
