const base = require('../methods/base_methods.js');

const EnterZipCode = async () => {
    await base.SendKeysToElement("[type='number']", '03045');
    await base.ClickOnElement("//div[text()='Verify']");
};

const EnterBirthDate = async () => {
    await base.SelectValueOfDropdown("[name='day']", "1");
    await base.SelectValueOfDropdown("[name='month']", "1");
    await base.SelectValueOfDropdown("[name='year']", "2000");
    await base.ClickOnElement("//div[text()='Join']");
};

const EnterEmail = async () => {
    let random_number = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
    let random_number_string = random_number.toString();
    let email = "als+" + random_number_string + "@hoiagency.com";
    await base.SendKeysToElement("[name='email']", email);
    await base.WaitForElement("//*[@id='email']/div[1]/div");
    await base.ClickOnElement("//div[text()='Next']");
};

const EnterUsername = async () => {
    await base.SendKeysToElement("[name='username']", "username");
    await base.WaitForElement("//*[@id='username']/div[1]/div");
    await base.ClickOnElement("//div[text()='Accept']");
};

const EnterPassword = async () => {
    await base.SendKeysToElement("[name='password']", "username");
    await base.WaitForElement("//*[@id='password']/div[1]/div");
    await base.ClickOnElement("//*[@id='password']/div[2]");
};

const ConfirmRegistration = async() => {
    await base.ClickOnElement("//div[text()='Confirm']");
};

const ConfirmAge = async() => {
    await base.ClickOnElement(".p-step-button");
};

const Confirm = async() => {
    const active_button = await page.$(".p-step-button--active");
    await active_button.evaluate(b => b.click());
};

const EnterBirthday = async() => {
    await base.WaitForElement("[name='birthday']");
    await base.SelectValueOfDropdown("[name='birthday']", "1");
    await base.SelectValueOfDropdown("[name='month']", "1");
    await base.SelectValueOfDropdown("[name='year']", "2000");
};

const EnterZipCode2 = async () => {
    await base.SendKeysToElement("[type='number']", '03045');
    await base.WaitForElement("//*[@id='zipcode']/div[1]/img[2]");
    await base.ClickOnElement(".p-step-button--active");
};

const ChooseRelationship = async() => {
    await base.ClickOnElement("//div[text()='open relationship']");
};

const ChooseEyeColour = async() => {
    await base.ClickOnElement("//div[text()='grey']");
};

const SpecifyPersonalCharacteristics = async(option) => {
    await base.WaitForElement(`//div[text()="${option}"]`);
    await base.ClickOnElement(`//div[text()="${option}"]`);
};

const ChooseHeight = async() => {
    await base.WaitForElement("[name='height']");
    await base.SelectValueOfDropdown("[name='height']", "1");
};

const EnterUsername2 = async() => {
    await base.SendKeysToElement("[type='username']", "username");
    await base.WaitForElement("//*[@id='username']/div[1]/img[1]");
    await base.ClickOnElement(".p-step-button--active");
};

const EnterPassword2 = async() => {
    await base.SendKeysToElement("[type='password']", "username");
    await base.WaitForElement("//*[@id='password']/div[1]/img[1]");
    await base.ClickOnElement(".p-step-button--active");
};

const EnterEmail2 = async() => {
    let random_number = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
    let random_number_string = random_number.toString();
    let email = "als+" + random_number_string + "@hoiagency.com";
    await base.SendKeysToElement("[type='text']", email);
    await base.WaitForElement("//*[@id='submit']/div[1]/img[1]");
    await base.ClickOnElement(".p-step-button--active");
};

const TriggerSignUpForm = async() => {
    await base.ClickOnElement(".p-desktop-profile-icon-wrapper");
};

const FillSignUpFormOut = async() => {
    await base.SelectValueOfDropdown("[name='age']", "20");
    await base.SendKeysToElement("[type='number']", '03045');
    await base.WaitForElement("//*[@id='__layout']/div/div[1]/div/div[2]/div");
    await base.SendKeysToElement("[placeholder='Username']", "username");
    await base.WaitForElement("//*[@id='__layout']/div/div[1]/div/div[3]/div");
    await base.SendKeysToElement("[placeholder='Password']", "password");
    await base.WaitForElement("//*[@id='__layout']/div/div[1]/div/div[4]/div");
    let random_number = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
    let random_number_string = random_number.toString();
    let email = "als+" + random_number_string + "@hoiagency.com";
    await base.SendKeysToElement("[placeholder='@gmail.com']", email);
    await base.WaitForElement("//*[@id='__layout']/div/div[1]/div/div[5]/div");
    await base.ClickOnElement("//div[text()='login']");
};

const EnterZipCode4 = async() => {
    await base.SendKeysToElement("[type='number']", '03045');
    await base.WaitForElement("//*[@id='zipcode']/div[1]/img");
    await base.ClickOnElement("//div[text()='Find now!']");
};

const Next = async() => {
    await base.ClickOnElement("//div[text()='next']");
}

const EnterEmail3 = async() => {
    let random_number = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
    let random_number_string = random_number.toString();
    let email = "als+" + random_number_string + "@hoiagency.com";
    await base.SendKeysToElement("[type='text']", email);
    await base.WaitForElement("//*[@id='email']/div/div[1]/img");
    await base.ClickOnElement("//*[@id='email']/div/div[2]");
};

const EnterUsername3 = async() => {
    await base.SendKeysToElement("[placeholder='Username']", "username");
    await base.WaitForElement("//*[@id='username']/div/div[1]/img");
};

const EnterPassword3 = async() => {
    await base.SendKeysToElement("[placeholder='Password']", "username");
    await base.WaitForElement("//*[@id='password']/div/div[1]/img");
    await base.ClickOnElement("//*[@id='password']/div/div[2]");
};

const Confirm2 = async() => {
    await base.WaitForElement("//div[text()='confirm']");
    await base.ClickOnElement("//div[text()='confirm']");
};

const EnterBirthDate2 = async () => {
    await base.SelectValueOfDropdown("[name='day']", "1");
    await base.SelectValueOfDropdown("[name='month']", "1");
    await base.SelectValueOfDropdown("[name='year']", "2000")
};

const Next2 = async() => {

}


module.exports = {
    EnterZipCode,
    EnterBirthDate,
    EnterEmail,
    EnterUsername,
    EnterPassword,
    ConfirmRegistration,
    ConfirmAge,
    Confirm,
    EnterBirthday,
    EnterZipCode2,
    ChooseRelationship,
    ChooseEyeColour,
    SpecifyPersonalCharacteristics,
    ChooseHeight,
    EnterUsername2,
    EnterPassword2,
    EnterEmail2,
    TriggerSignUpForm,
    FillSignUpFormOut,
    EnterZipCode4,
    Next,
    EnterEmail3,
    EnterUsername3,
    EnterPassword3,
    Confirm2,
    EnterBirthDate2,
    Next2
};