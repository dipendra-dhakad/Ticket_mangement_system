const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

const ticketRoutes = require("./routes/ticketRoutes");

// mount the ticket API routes
app.use("/api/ticket", ticketRoutes);

app.listen(PORT, () => {
  console.log(`App is started at ${PORT}`);
});

const dbConnect = require("./config/database");
dbConnect();

//default route
app.get("/", (req, res) => {
  res.send("<h1>This is a ticket Homepage</h1>");
});
