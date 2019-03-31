const router = require("express").Router();
const searchController = require("../../controllers/search");

//Matches with /api/search/:query
router.route("/:query")
.post(searchController.search);

module.exports = router;