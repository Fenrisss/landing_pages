const puppeteer = require('puppeteer');
const {installMouseHelper} = require('./mouse_pointer');
let {HEADLESS, KEEP_BROWSER_OPEN} = require('./env_config');



if (HEADLESS === 'false') {
    HEADLESS = false;
}

const opts = {
    headless: HEADLESS,
    defaultViewport: null,
    slowMo: 50,
    args: [
        '--disable-gpu', '--window-size=1920,1080', '--no-sandbox',
        '--disable-setuid-sandbox', '--disable-infobars',
        '--disable-save-password-bubble', '--disable-dev-shm-usage',
        '--disable-web-security', '--disable-features=IsolateOrigins,site-per-process',
        '--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream',
        '--use-file-for-fake-video-capture=./tests/utils/data/128.mjpeg'
    ]
};

const deleteAuthCookies = async () => {
    if (KEEP_BROWSER_OPEN !== 'true') {
        await page.deleteCookie(
            {name: 'auth.token', domain: cookieDomain},
            {name: 'PHPSESSID', domain: cookieDomain},
            {name: 'PHPSESSID', domain: erpCookieDomain},
            {name: 'jwt_access_token', domain: cookieDomain}
        );
        await page.reload();
    }
};

const setCookie = async (cookieValue, name = 'auth.token') => {
    await page.setCookie({name: name, value: cookieValue, domain: cookieDomain});
};

before(async () => {
    global.data_ui = 'empty data';
    global.deleteAuthCookies = deleteAuthCookies;
    global.setAuthCookie = setCookie;
    global.browser = await puppeteer.launch(opts);
    const context = browser.defaultBrowserContext();
    const pages = await browser.newPage();
    global.page = pages;
    await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.0 Safari/537.36');
    await page.setDefaultNavigationTimeout(120000);
    await installMouseHelper(page);
});

after(async () => {
    if (KEEP_BROWSER_OPEN !== 'true') {
        await browser.close();
    }
});
