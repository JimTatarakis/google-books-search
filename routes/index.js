const path = require("path");
const router = require("express").Router();
const apiRoutes = require('./api');

// API Routes
// =============================================================
router.use("/api", apiRoutes);

// API: If no routes are used, send client side app.
router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

module.exports = router;