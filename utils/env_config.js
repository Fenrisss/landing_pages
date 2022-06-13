const config = require('config');
const result = require('dotenv').config();


const PRODUCT = process.env.PRODUCT;
const KEEP_BROWSER_OPEN = process.env.KEEP_BROWSER_OPEN;
const HEADLESS = process.env.HEADLESS;
const PRODUCT2 = process.env.PRODUCT2;
const PRODUCT3 = process.env.PRODUCT3;
const PRODUCT4 = process.env.PRODUCT4;
const PRODUCT5 = process.env.PRODUCT5;

module.exports = {
    HEADLESS,
    PRODUCT,
    KEEP_BROWSER_OPEN,
    PRODUCT2,
    PRODUCT3,
    PRODUCT4,
    PRODUCT5

};