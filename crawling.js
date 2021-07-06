const urlData = require("./copyUrlData");
const puppeteer = require("puppeteer");
// const io = require("socket.io-client");
// const cheerio = require("cheerio");
// const axios = require("axios");
// const socket = io("http://localhost:4000");
require("dotenv").config();
const port = process.env.PORT || 4001;

const login = async (page) => {
  try {
    await page.type("#id", process.env.EMAIL);
    await page.type("#pw", process.env.PASSWORD);
    await page.click("input.btn_global");
    await page.waitForResponse((response) => {
      console.log(response);
      // return response.url() === "";
    });
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
  await page.goto("https://nid.naver.com/nidlogin.login?mode=form&url=https%3A%2F%2Fwww.naver.com");
  await login(page);

  // await browser.close();
})();
