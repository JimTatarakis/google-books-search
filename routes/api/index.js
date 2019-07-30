const router = require("express").Router();
const apiRoutes = require('./apiRoutes');

// Router: Use Book routes
router.use("/books", apiRoutes);

module.exports = router;