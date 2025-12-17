const express = require("express");
const { addExpenseData,getExpenseData,deleteExpenseData } = require("../controllers/expenseController");
const router = express.Router();



router.post("/add", addExpenseData);
router.get("/get_data", getExpenseData);
router.delete("/delete/:id", deleteExpenseData);


module.exports = router;