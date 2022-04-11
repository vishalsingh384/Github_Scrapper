const request=require("request");
const cheerio=require("cheerio");
const path=require("path");
const fs=require("fs");
const allRepos=require("./allRepos");
const { jsPDF } = require("jspdf"); // will automatically load the node version

function getIssue(url){
    // repoPath=rPath;
    // repoName=rName;
    request(url,cb);
}

function cb(err,res,body){
    if(err){
        console.log("error",err);
    }else{
        getIssuesLink(body);
    }
}


function getIssuesLink(html){
    // console.log(repoPath);
    // console.log(repoName);
    let selecTool=cheerio.load(html);
    let issueArr=selecTool('a[data-hovercard-type="issue"]');
    let p=path.join(repoPath,"issues.pdf");
    // let iArr=[];
    let x=0;
    console.log(p);
    // const doc = new jsPDF();
    // for(let i=0;i<5;i++){
    //     x+=10;
    //     let issue=selecTool(issueArr[i]).text().trim();
    //     doc.text(issue, 10, x);
    // }
    // doc.save(p);}
}
module.exports={
    getIssue:getIssue,
}
