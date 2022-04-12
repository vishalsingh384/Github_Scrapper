const request=require("request");
const cheerio=require("cheerio");
const issues=require("./issues");
const path=require("path");
const fs=require("fs");

function getAllRepos(url){
    request(url,cb);
}

function cb(err,res,body){
    if(err){
        console.log("error",err);
    }else{
        getAllReposLink(body);
    }
}

function getAllReposLink(html){
    let selecTool=cheerio.load(html);
    let topicName=selecTool(".h1");
    let topicFolderPath=path.join(__dirname,topicName.text().trim());
    if(!fs.existsSync(topicFolderPath)){
       fs.mkdirSync(topicFolderPath);
    }

    let repo=selecTool(".text-bold.wb-break-word");//fetching all repositories
    // console.log(repo.length);

    for(let i=0;i<8;i++){
        let relativeLink=selecTool(repo[i]).attr("href");
        let repoName=selecTool(repo[i]).text().trim();
        let repoFolderPath=path.join(topicFolderPath,repoName);
        if(!fs.existsSync(repoFolderPath)){
           fs.mkdirSync(repoFolderPath);
        }
        let fullLink="https://www.github.com"+relativeLink+"/issues";//link to the respective issues page
        issues.getIssue(fullLink,repoFolderPath);
    }
}

module.exports={
    getAllRepos:getAllRepos
}