let url="https://github.com/topics/3d";
const request=require("request");
const cheerio=require("cheerio");
const path=require("path");
const fs=require("fs");

request(url,cb);

function cb(err,res,body){
    if(err){
        console.log("error",err);
    }else{
        handleHTML(body);
    }
}

function handleHTML(html){
    let selecTool=cheerio.load(html);
    let anchorElem=selecTool(".text-bold.wb-break-word");
    let topicFolderPath=path.join(__dirname,"bhu");
    if(!fs.existsSync(topicFolderPath)){
       fs.mkdirSync(topicFolderPath);
    }
}