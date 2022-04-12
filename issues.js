const request=require("request");
const cheerio=require("cheerio");
const path=require("path");
const { jsPDF } = require("jspdf"); // will automatically load the node version


function getIssue(url,rPath){
    request(url,function(err,res,body){
        if(err){
            console.log("error",err);
        }else{
            getIssuesLink(body,rPath);
        }
    });
    function getIssuesLink(code,repoPath){
        let selecTool=cheerio.load(code);
        let issueArr=selecTool('a[data-hovercard-type="issue"]');
        let p=path.join(repoPath,"issues.pdf");
        let count=0;
        console.log("path->"+p);
        const doc = new jsPDF();//pdf doc creation
        for(let i=0;i<5;i++){
            count+=20;
            let issue=selecTool(issueArr[i]).text().trim();
            doc.text(i+1+") "+issue, 10, count);//writing the issues in the pdf file
        }
        doc.save(p);//saving the pdf file in specified location
    }
}

module.exports={
    getIssue:getIssue,
}
