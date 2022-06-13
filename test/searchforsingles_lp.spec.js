// const base = require('./methods/base_methods');
const {PRODUCT, PRODUCT2, PRODUCT3, PRODUCT4} = require('../utils/env_config.js');
const env = require('../utils/bootstrap.js');
const landingPageMethods = require('../test/methods/landing_page_methods');


const URL = "https://" + PRODUCT;
const URL2 = "https://" + PRODUCT2;
const URL3 = "https://" + PRODUCT3;
const URL4 = "https://" + PRODUCT4;
describe("SearchforSingles landing pages", () => {
    it.skip("the first landing page -- https://landing.searchingforsingles.com/msn-1/", async() => {
        await page.goto(URL);
        await landingPageMethods.EnterZipCode();
        await landingPageMethods.EnterBirthDate();
        await landingPageMethods.EnterEmail();
        await landingPageMethods.EnterUsername();
        await landingPageMethods.EnterPassword();
        await landingPageMethods.ConfirmRegistration();
    });

    it.skip("the second landing page -- https://landing.searchingforsingles.com/flp-1", async() => {
        await page.goto(URL2);
        await landingPageMethods.ConfirmAge();
        await landingPageMethods.Confirm();
        await landingPageMethods.Confirm();
        await landingPageMethods.Confirm();
        await landingPageMethods.Confirm();
        await landingPageMethods.Confirm();
        await landingPageMethods.Confirm();
        await landingPageMethods.EnterBirthday();
        await landingPageMethods.EnterZipCode2();
        await landingPageMethods.SpecifyPersonalCharacteristics("open relationship");
        await landingPageMethods.SpecifyPersonalCharacteristics("grey");
        await landingPageMethods.SpecifyPersonalCharacteristics("brown");
        await landingPageMethods.SpecifyPersonalCharacteristics("asian");
        await landingPageMethods.SpecifyPersonalCharacteristics("normal");
        await landingPageMethods.ChooseHeight();
        await landingPageMethods.SpecifyPersonalCharacteristics("unshaved");
        await landingPageMethods.EnterUsername2();
        await landingPageMethods.EnterPassword2();
        await landingPageMethods.Confirm();
        await landingPageMethods.EnterEmail2();
    });

    it.skip("the third landing page -- https://landing.searchingforsingles.com/flv-1", async() => {
        await page.goto(URL3);
        await landingPageMethods.TriggerSignUpForm();
        await landingPageMethods.FillSignUpFormOut();
    });

    it.skip("the 4th landing page -- topglobaldeals.com/offer/dtn-1", async() => {
        await page.goto(URL4);
        await landingPageMethods.EnterZipCode4();
        await landingPageMethods.EnterBirthDate2();
        await landingPageMethods.Next();
        await landingPageMethods.Next();
        await landingPageMethods.EnterEmail3();
        await landingPageMethods.Next2();
        await landingPageMethods.EnterUsername3();
        await landingPageMethods.Next();
        await landingPageMethods.EnterPassword3();
        await landingPageMethods.Confirm2();
    });





});