import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox"]
});

// Create page
const page = await browser.newPage();

// Create viewport configuration
const viewport = {
    width: 1024,
    height: 768
};

// Set the viewport
await page.setViewport({
    width: viewport.width,
    height: viewport.height,
    deviceScaleFactor: 1
});

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