const puppeteer = require('puppeteer')
describe("Home Page TestSuite",() => {
    it("Home landing page",async() => {
        const browser = await puppeteer.launch({
            headless:false,
            slowMo:50,
            defaultViewport: null,
            // args: ['--start-maximized']
        })





        const page = await browser.newPage();
        await page.goto("https://landing.searchingforsingles.com/flp-1");
        const element = await page.$(".p-step-button");
        await element.evaluate(b => b.click());
        await page.waitForSelector('.p-step-button:nth-child(2)');

        const element2 = await page.$(".p-step-button:nth-child(2)");
        await element2.evaluate(b => b.click());

        await page.waitForSelector(".p-step-button:nth-child(2)");
        const element3 = await page.$(".p-step-button:nth-child(2)");
        await element3.evaluate(b => b.click());

        await page.waitForSelector(".p-step-button:nth-child(2)");
        const element4 = await page.$(".p-step-button:nth-child(2)");
        await element4.evaluate(b => b.click());

        await page.waitForSelector(".p-step-button");
        const element5 = await page.$(".p-step-button");
        await element5.evaluate(b => b.click());

        await page.waitForSelector(".p-step-button");
        const element6 = await page.$(".p-step-button");
        await element6.evaluate(b => b.click());

        await page.waitForSelector(".p-step-button");
        const element7 = await page.$(".p-step-button");
        await element7.evaluate(b => b.click());

        const birthday = await page.waitForSelector("[name='birthday']");
        await birthday.select("1");

        const month = await page.waitForSelector("[name='month']");
        await month.select("1");

        const year = await page.waitForSelector("[name='year']");
        await year.select("2002");

        const zipcode = await page.waitForSelector("[type='number']");
        await page.type("[type='number']","03045", { delay: 100 });

        await page.waitForSelector('[alt=Continue]');
        await Promise.all([
            await page.click("[alt=Continue]")
        ]);
        await page.click("[alt=Continue]");



        // await page.waitForSelector(".p-step-button", {timeout: 100000})
        // const next = await page.$("[alt=Continue]")


        // await next.click();
        // await page.waitForNavigation();
        // await page.waitForSelector("//div[text()='single']");
        // const relationship = await page.$("//div[text()='single']");
        // await relationship.click();

        const relationship = await page.waitForSelector(".p-step-option:nth-child(2)");
        await relationship.click();



        const eye = await page.waitForSelector(".p-step-option:nth-child(2)");
        await eye.click();

        // await page.waitForSelector(".p-step-option:nth-child(2)");
        const colour = await page.waitForSelector(".p-step-option:nth-child(2)");
        await colour.evaluate(b => b.click());

        // await page.waitForSelector(".p-step-option:nth-child(2)");
        const ethnicity = await page.waitForSelector(".p-step-option:nth-child(2)");
        await ethnicity.evaluate(b => b.click());

        // await page.waitForSelector(".p-step-option:nth-child(2)");
        const posture = await page.waitForSelector(".p-step-option:nth-child(2)");
        await posture.evaluate(b => b.click());

        // await page.waitForSelector("//div[text()='height']");
        const tall = await page.waitForSelector("[name='height']");
        await tall.select("1");

        // await page.waitForSelector(".p-step-option:nth-child(2)");
        const pub_hair = await page.waitForSelector(".p-step-option:nth-child(2)");
        await pub_hair.evaluate(b => b.click());

        // await page.waitForSelector("//div[text()='username']");
        const username = await page.waitForSelector("[type='username']");
        await username.type("myname");
        // await page.waitForSelector(".p-step-button");
        await element7.evaluate(b => b.click());


        const pass = await page.waitForSelector("[type='password']");
        await pass.type("myname");
        // await page.waitForSelector(".p-step-button");
        await element7.evaluate(b => b.click());

        await page.waitForSelector(".p-step-button");
        await element7.evaluate(b => b.click());





    });
});

const ClickOnElement = async (element, delay = 0, count = 1) => {
    await elements_handler(element)
        .then(elementHandle => elementHandle.click({delay: delay, clickCount: count}));
};