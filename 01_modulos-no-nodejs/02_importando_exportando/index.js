
const creatProduct=require("./product");

const product=creatProduct('#12','pc',2000);
console.log(product.getInfo());

// aqui e meio que auto explicativo 
// estou importando a função creatProduct()passando os parametros
//e atribuindo ela a um nome de variavel para essa insaatancia da classe



//claro ainda tenho duvidas de como o get info deu certo sendo que eu não importei ele