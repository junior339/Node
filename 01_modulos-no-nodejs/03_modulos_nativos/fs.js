const fs=require("fs");
const path = require("path");
//criar uma pasta ou um diretorio 
const mensagem=`aqui temos uma mensagem de test`

fs.mkdir(path.join(__dirname,"new_folder"),()=>{});

fs.writeFile(path.join(__dirname,"new_folder/arquivo.txt"),mensagem,()=>{})

//fs.mkdir("./nova_pasta",()=>{})

fs.appendFile(path.join(__dirname,"new_folder","arquivo.txt"),"\nparte dois do arquivo",()=>{})   

let fileData="";
//como ler um arquivo 
fs.readFile(path.join(__dirname,"new_folder","arquivo.txt"),"utf-8",(error,data)=>{
    fileData=data;
    console.log(fileData)
});

