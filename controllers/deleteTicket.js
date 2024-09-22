const Ticket = require("../models/ticket");

exports.deleteTicket = async (req, res) => {
  try {
    const { id } = req.params;

    const ticket = await Ticket.findByIdAndDelete(id);
    if (!ticket) return res.status(404).json({ message: "Ticket not found" });
    res.status(200).json({
      success: true,
      message: "Ticket deleted Successfully",
    });
  } catch (err) {
    console.error(err);
    console.log("error agya h" + err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};
