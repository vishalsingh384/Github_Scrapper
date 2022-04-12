const request=require("request");
const cheerio=require("cheerio");
const path=require("path");
const fs=require("fs");
const { jsPDF } = require("jspdf"); // will automatically load the node version


function getIssue(url,rPath,rName){
    request(url,function(err,res,body){
        if(err){
            console.log("error",err);
        }else{
            getIssuesLink(body,rPath,rName);
        }
    });
    function getIssuesLink(code,repoPath,repoName){
        let selecTool=cheerio.load(code);
        let issueArr=selecTool('a[data-hovercard-type="issue"]');
        let p=path.join(repoPath,"issues.pdf");
        let x=0;
        console.log("path->"+p);
        const doc = new jsPDF();
        for(let i=0;i<5;i++){
            x+=10;
            let issue=selecTool(issueArr[i]).text().trim();
            doc.text(issue, 10, x);
        }
        doc.save(p);
    }
    // getIssuesLink(html);
}

module.exports={
    getIssue:getIssue,
}
