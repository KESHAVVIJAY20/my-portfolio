const express = require('express');
const router = express.Router();
const portfolioController = require('../controller/portfolioController');

router.get('/', portfolioController.home);
router.get("/about",portfolioController.home);
router.post("/contact", portfolioController.contact);
router.get("/contact",(req,res) => {
    res.redirect("/");
});


module.exports = router;