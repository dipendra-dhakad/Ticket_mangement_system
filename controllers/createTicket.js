const Ticket = require("../models/ticket");

exports.createTicket = async (req, res) => {
  try {
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

    const response = await Ticket.create({ title, description,status });

    res.status(200).json({
      success: true,
      data: response,
      message: "Ticket Created Successfully",
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
