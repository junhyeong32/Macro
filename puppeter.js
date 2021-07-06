const puppeteer = require("puppeteer");

const login = async (page) => {
  try {
    // await page.type("#email", process.env.EMAIL);
    // await page.type("#password", process.env.PASSWORD);
    await page.click("#email");
    await page.waitFor(1000);

    await page.keyboard.down("Meta");
    await page.keyboard.press("V");
    await page.keyboard.up("Meta");
    // await page.waitForResponse((response) => {
    //   return response.url() === "https://cutt.ly/scripts/getHidden.php";
    // });
  } catch (e) {
    console.log(e);
  }
};

(async () => {
  const browser = await puppeteer.launch({ headless: false, args: ["--window-size=1920,1080"] });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1280,
    height: 1080,
  });
  await page.goto("https://cutt.ly/login");
  await login(page);
  // await browser.close();
})();
