const express = require("express");
const router = express.Router();

const { createTicket } = require("../controllers/createTicket");
const { getTicket } = require("../controllers/getTicket");
const { getTicketById } = require("../controllers/getTicketById");
const { updateTicket } = require("../controllers/updateTicket");
const { deleteTicket } = require("../controllers/deleteTicket");

router.post("/createTicket", createTicket);
router.get("/getTicket", getTicket);
router.get("/getTicketById/:id", getTicketById);
router.put("/updateTicket/:id", updateTicket);
router.delete("/deleteTicket/:id", deleteTicket);

module.exports = router;
