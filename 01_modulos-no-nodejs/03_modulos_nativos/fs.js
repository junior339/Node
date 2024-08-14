const fs=require("fs");
const path = require("path");
//criar uma pasta ou um diretorio 
const mensagem=`aqui temos uma mensagem de test`

fs.mkdir(path.join(__dirname,"new_folder"),()=>{});//aqui eu criei uma nova pasta com o dir e o mkdir

fs.writeFile(path.join(__dirname,"new_folder/arquivo.txt"),mensagem,()=>{})//pasta criada eu crio um txt dentro dessa pasta

//fs.mkdir("./nova_pasta",()=>{})

fs.appendFile(path.join(__dirname,"new_folder","arquivo.txt"),"\nparte 2 do arquivo \nparte 3 do arquivo ",()=>{})//isso serve para adicionar no 
//arquivo e o \n serve para pular uma linha


let fileData="";
//como ler um arquivo
//aqui tambem e facil e so ler 
//o utf-8 e a codificação  
//a função é o erro e o dado em uma string para ser visualizado 
fs.readFile(path.join(__dirname,"new_folder","arquivo.txt"),"utf-8",(error,data)=>{
    fileData=data;
    console.log(fileData)
});

