const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true,"This is required"],
    minlength: [5, 'Title must be at least 5 characters long'], 
    maxlength: [100, 'Title cannot exceed 100 characters'], 
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    minlength: [10, 'Description must be at least 10 characters long'], 
    maxlength: [500, 'Description cannot exceed 500 characters'],
  },

  status: {
    type: String,
    enum: ["open", "in progress", "closed"],
    default: "open",
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },

  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

const Ticket = mongoose.model("Ticket", ticketSchema);
module.exports = Ticket;
