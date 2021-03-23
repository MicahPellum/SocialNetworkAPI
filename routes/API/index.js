const router = require("express").Router();
const userRoutes = require("./user-routes");
// const thoughtRoutes = require("./thought-routes");

// add prefix of users for user-routes
router.use("/users", userRoutes);

// add prefix of thoughts for thought-routes
// router.use("/thoughts", thoughtRoutes);

module.exports = router;