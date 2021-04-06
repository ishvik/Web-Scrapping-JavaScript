require("chromedriver");

let wd = require("selenium-webdriver");
let fs = require("fs");
let browser = new wd.Builder().forBrowser('chrome').build();
let topiclink = [];
let topicname =[];

let all_data = {};
async function github(){
    await browser.get("https://github.com/topics");
    await browser.wait(wd.until.elementLocated(wd.By.css(".container-lg.p-responsive.mt-6 ul li a")));
    let topics = await browser.findElements(wd.By.css(".container-lg.p-responsive.mt-6 ul li a"));
    let topics_name = await browser.findElements(wd.By.css(".container-lg.p-responsive.mt-6 ul li p"));
    for(let i in topics){
        let t = await topics[i].getAttribute("href");
        topiclink.push(t);
        
    }
    for(let name in topics_name){
        if(name%2 == 0){
            let n = await topics_name[name].getAttribute("innerText");
            topicname.push(n);
        }
    }
    for(let i in topiclink){
        topics[topicname[i]] = topiclink[i];
    }

    console.log(all_data);
    // for(let l of topiclink){
    //     await browser.get(l);
    //     await browser.wait(wd.until.elementLocated(wd.By.css(".f3.color-text-secondary.text-normal.lh-condensed a")));
    //     let articles = await browser.findElements(wd.By.css(".f3.color-text-secondary.text-normal.lh-condensed a"));
    //     let url = [];
    //     for(let i=0;i<16;i++){
    //         if(i%2 != 0){
    //         let u = await articles[i].getAttribute("href");
    //         url.push(u);
    //         }
    //     }
    //     for(let u of url){
    //         await browser.get(u);
    //         await browser.wait(wd.until.elementLocated(wd.By.css(".UnderlineNav-body.list-style-none li a")));
    //         let buttons = await browser.findElements(wd.By.css(".UnderlineNav-body.list-style-none li a"));
    //         await buttons[1].click();
    //         await browser.wait(wd.until.elementLocated(wd.By.css(".flex-auto.min-width-0.p-2.pr-3.pr-md-2 a")));
    //         let issues = await browser.findElements(wd.By.css(".flex-auto.min-width-0.p-2.pr-3.pr-md-2 a"));
    //         let issues_link = [];
    //         if(issues.length < 8){
    //             for(let i=0;i<issues.length;i++){
    //                 let il = await issues[i].getAttribute("href");
    //                 issues_link.push(il);
    //                 let ilname = await issues[i].getAttribute("innerText");
    //                 issues_link.push(ilname);
    //             }
    //         }else{
    //         for(let i=0;i<8;i++){
    //             let il = await issues[i].getAttribute("href");
    //             issues_link.push(il);
    //             let ilname = await issues[i].getAttribute("innerText");
    //             issues_link.push(ilname);
    //         }
    //     }
    //         console.log(issues_link);
    //     }
    // }
}

github();