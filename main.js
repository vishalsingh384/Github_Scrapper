let url="https://github.com/topics";

const request=require("request");
const cheerio=require("cheerio");
const path=require("path");
const fs=require("fs");
const allRepos=require("./allRepos");
request(url,cb);

function cb(err,res,body){
    if(err){
        console.log("error",err);
    }else{
        handleHTML(body);
    }
}

function handleHTML(html){
    console.log("done");
    let selecTool=cheerio.load(html);
    let anchorElem=selecTool('.no-underline.flex-1.d-flex.flex-column');
    // console.log(anchorElem.text());
    for(let i=0;i<3;i++){
        let relativeLink=selecTool(anchorElem[i]).attr("href");
        // console.log(relativeLink+"\n");
        let fullLink="https://www.github.com"+relativeLink;
        // console.log(fullLink);
        allRepos.getAllRepos(fullLink);
    }
}