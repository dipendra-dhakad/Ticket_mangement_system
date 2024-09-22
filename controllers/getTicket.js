const Ticket = require("../models/ticket");

exports.getTicket = async (req, res) => {
  try {
    const tickets = await Ticket.find({});

    res.status(200).json({
      success: true,
      data: tickets,
      message: "Entire tickets data is fetched",
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
