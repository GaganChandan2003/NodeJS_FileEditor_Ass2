
const fs = require("fs");
let arg=process.argv.splice(2);

let command=arg[0];
let filePath=arg[1];
let conent=arg[2];

switch(command)
{
    case "read":
        {
            fs.readFile(filePath,{ encoding: "utf-8" }, (err, data) => {
                if (err) throw err;
                console.log(data);
             })
        
        }
        case "append":
            {
                fs.appendFile(filePath,conent,(err)=>
                {
                    if(err) throw err;
                    console.log('The data is appended to file')
                })
            }
        case "delete":
            {
                fs.unlink(filePath,(err)=>
                {
                    if(err)throw err;
                    console.log('File Sucessfully deleted')
                })
            }
        case "create":
            {
               fs.open(filePath,"w",(err)=>
               {
                if(err) throw err;
                console.log("File created sucessfully");
               })
            }
        case "rename":
            {
                fs.rename(filePath,conent,(err)=>
                {
                    if(err) throw err;
                    console.log("Renamed sucessfully");
                })
            }
            case "list":
                {
                    fs.readdir(filePath,{encoding:"utf-8"},(err,FileList)=>
                    {
                        if(err) throw err;
                        console.log(FileList)
                    })
                }
     default:
        {
            return ;
        }
}