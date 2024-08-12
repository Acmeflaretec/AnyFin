const express = require('express');
const productRoutes = require('./productRoutes');
const serviceRoutes = require('./serviceRoutes');

const router = express.Router();


router.use('/v1/service', serviceRoutes);
router.use('/v1/products', productRoutes);

module.exports = router;
