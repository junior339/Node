const path=require("path");//aqui eu estou importando um modulo nativo


//pegar um nome de um arquivo 

//dica olhe a documnetação do path para aprender melhor

let nome =path.basename(__filename);//com isso eu consigo retornar o nome
//do arquivo path.js nesse contexto claro 
let nome1 =path.basename(__dirname);//aqui eu retorno a pasta que ele se encontra 
console.log(nome)
console.log("-------------");
console.log(nome1);
console.log("**************")
console.log(path.extname(__filename));//nesse caso é .js mas eu poderia descobrir 
//qualquer exetnsão
//se eu tentar com dirname ele nao retorna nada

const fs=require("fs");

//criar um arquivo no diretorio do arquivo atual

console.log(path.join(__dirname,"message.txt"))
//ele me retorna o caminho com o message.txt no final



fs.writeFile(path.join(__dirname,"message.txt"),"novo arquivo de teste",()=>{});

