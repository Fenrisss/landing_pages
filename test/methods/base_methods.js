
const elements_handler = async (element, options = {}) => {
    const element_handler_error = (message) => {
        const error_text = {
            error_message: message,
            error_tips: 'Element not exist/visible on the page or need to more time for represent on the page'
        };

        return new Error(JSON.stringify(error_text, null, 4));
    };

    if (!element) {
        throw Error('Element is empty. Please check it');
    } else if (element.startsWith('//') || element.startsWith('(//')) {
        return await page.waitForXPath(element, {
            visible: true,
            timeout: options.timeout,
            hidden: options.hidden
        }).catch(error => {
            throw element_handler_error(error.message);
        });
    } else {
        return await page.waitForSelector(element, {
            visible: true,
            timeout: options.timeout,
            hidden: options.hidden
        }).catch(error => {
            throw element_handler_error(error.message);
        });
    }
};

const ClickOnElement = async (element, delay = 0, count = 1) => {
    await elements_handler(element)
        .then(elementHandle => elementHandle.click({delay: delay, clickCount: count}));
};

const SendKeysToElement = async (element, text) => {
    await elements_handler(element).then(elementHandle => elementHandle.type(text.toString()));
};

const SelectValueOfDropdown = async (element, value) => {
    await elements_handler(element, {hidden: true}).then(elementHandle => elementHandle.select(value.toString()));
};

const WaitForElement = async (element, timeout, hidden) => {
    await elements_handler(element, {hidden, timeout});
};



module.exports = {
    elements_handler,
    ClickOnElement,
    SendKeysToElement,
    SelectValueOfDropdown,
    WaitForElement
}
