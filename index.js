const express = require('express');
const path = require('path');
const puppeteer = require('puppeteer');
const ejs = require('ejs');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/documents', async (req, res) => {
  try {
    const renderedHtml = await ejs.renderFile(path.join(__dirname, 'views', 'template.ejs'), { title: 'Generated PDF' });
    
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.setContent(renderedHtml);
    const pdfBuffer = await page.pdf();
    await browser.close();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=generated.pdf');
    res.status(200).send(pdfBuffer);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
