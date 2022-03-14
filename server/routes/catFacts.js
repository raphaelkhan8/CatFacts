const express = require("express");
const { getCatFacts } = require("../actions/catFacts");

const router = new express.Router();

router.get("/", async (req, res) => {
    try {
        const data = await getCatFacts();
        res.send(data);
    }
    catch(e) {
        console.error(e)
    }
});

module.exports.catFactsRouter = router;