const config = require('config');
const result = require('dotenv').config();


const PRODUCT = process.env.PRODUCT;
const KEEP_BROWSER_OPEN = process.env.KEEP_BROWSER_OPEN;
const HEADLESS = process.env.HEADLESS;
const PRODUCT2 = process.env.PRODUCT2;
const PRODUCT3 = process.env.PRODUCT3;
const PRODUCT4 = process.env.PRODUCT4;
const PRODUCT5 = process.env.PRODUCT5;
const PRODUCT6 = process.env.PRODUCT6;
const PRODUCT7 = process.env.PRODUCT7;
const PRODUCT8 = process.env.PRODUCT8;

module.exports = {
    HEADLESS,
    PRODUCT,
    KEEP_BROWSER_OPEN,
    PRODUCT2,
    PRODUCT3,
    PRODUCT4,
    PRODUCT5,
    PRODUCT6,
    PRODUCT7,
    PRODUCT8,

};