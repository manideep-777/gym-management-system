const mongoose = require("mongoose");

const BillSchema = new mongoose.Schema({
    billingPeriod: { type: String, required: true },
    amount: { type: Number, required: true },
    paymentStatus: { type: String, enum: ["Pending", "Paid"], default: "Pending" },
});

// const Bill = mongoose.model("Bills", BillSchema);

module.exports = BillSchema;