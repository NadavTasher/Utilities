import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox"]
});

// Create page
const page = await browser.newPage();

export default {
    goTo: {
        handler: async (parameters) => {
            // Load page
            await page.goto(new URL(parameters.URL));

            // Close page
            page.goto(new URL("about:blank"));

            // Return screenshot
            return true;
        },
        parameters: {
            URL: "string"
        }
    }
};