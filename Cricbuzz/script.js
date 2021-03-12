require("chromedriver");

let wd = require("selenium-webdriver");

let browser = new wd.Builder().forBrowser('chrome').build();
let cmds = process.argv.slice(2);
let matchid = cmds[0];
let innings = cmds[1];
let batsmencols = ["PlayerName","out","runs","ballsplayed","fours","six","sr"];
let i1batsmen = [];

async function batsmen(){
    await browser.get(`https://www.cricbuzz.com/live-cricket-scores/30880/${matchid}`);
    await browser.wait(wd.until.elementLocated(wd.By.css(".cb-nav-bar a")));
    let buttons = await browser.findElements(wd.By.css(".cb-nav-bar a"));
    await buttons[1].click();
    await browser.wait(wd.until.elementLocated(wd.By.css(`#innings_${innings} .cb-col.cb-col-100.cb-ltst-wgt-hdr`)));
    let tables = await browser.findElements(wd.By.css(`#innings_${innings} .cb-col.cb-col-100.cb-ltst-wgt-hdr`));
    let batsmeni1 = await tables[0].findElements(wd.By.css(".cb-col.cb-col-100.cb-scrd-itms"));
    for(let i=0;i<(batsmeni1.length)-3;i++){
        let col = await batsmeni1[i].findElements(wd.By.css("div"));
        let data = {};
        for(j in col){
            if(j != 1){
                data[batsmencols[j]]= await col[j].getAttribute("innerText");
            }
        }
        i1batsmen.push(data);
    }
    console.log(i1batsmen);
}

async function bowler(){
    
}

batsmen();