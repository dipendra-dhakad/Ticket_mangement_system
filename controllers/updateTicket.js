const Ticket = require("../models/ticket");
const mongoose = require('mongoose');

exports.updateTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description,status } = req.body;
  
      
    if (!title || title.trim().length < 5 || title.trim().length > 100) {
        return res.status(400).json({
          success: false,
          message: "Title must be between 5 and 100 characters",
        });
      }
  
      if (!description || description.trim().length < 10 || description.trim().length > 500) {
        return res.status(400).json({
          success: false,
          message: "Description must be between 10 and 500 characters",
        });
      }
  
      const validStatuses = ['open', 'in progress', 'closed'];
      if (status && !validStatuses.includes(status)) {
        return res.status(400).json({
          success: false,
          message: `Status must be one of the following: ${validStatuses.join(', ')}`,
        });
      }
  

    const ticket = await Ticket.findByIdAndUpdate(
      { _id: id },
      { title, description,status, updatedAt: Date.now() },
      { new: true }
    );
  
    if (!ticket) return res.status(404).json({ message: "Invalid ticket ID" });

    res.status(200).json({
      success: true,
      data: ticket,
      message: "Updated Ticket Successfully",
    });
  } catch (err) {
    console.error(err);
    console.log("error while updating" + err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};
