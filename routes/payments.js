const express = require("express");
const router =  express.Router();

const {allPayments,addPayment} =  require("../controllers/payments");

router.get("/payments",allPayments);
router.post("/payment",addPayment);

module.exports = router;