const mongoose = require('mongoose');
const Ticket = require("../models/ticket");

exports.getTicketById = async (req, res) => {
  try {
    const id = req.params.id;
    const ticket = await Ticket.findById({ _id: id });

    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "No Data found in given id or invalid id",
      });
    }


    res.status(200).json({
      success: true,
      data: ticket,
      message: `Todo ${id} ticket data successfully fetched`,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};
