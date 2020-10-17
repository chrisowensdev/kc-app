'use strict';

const express = require('express');
const router = express.Router();

const shop = require('../models/shopModel');

router.get('/', async (req, res) => {
    const shopData = await shop.showShopDetail();
    res.json(shopData).status(200);
});

router.get('/listings', async (req, res) => {
    const findAllShopListingsActive = await shop.findAllShopListingsActive();
    res.json(findAllShopListingsActive);
});

module.exports = router;
