const express = require("express");
const router =  express.Router();

const {allMemberships,findMembership,addMembership} =  require("../controllers/memberships")

router.get("/memberships",allMemberships);
router.get("/memberships/:id",findMembership);
router.post("/membership", addMembership);

module.exports = router;
