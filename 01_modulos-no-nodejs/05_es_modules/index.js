import lodash from "lodash";

const {filter}=lodash;
//ou
lodash.filter();

//antigo
//const{createProduct,Product}=require("./product")

//para importar novo
import{createProduct,Product,productPrice} from "./product.js";

//importando tudo 
import * as productModule from "./product.js"
//como acessar
productModule.createProduct();//aqui eu tenho um meio de chamar


const p1=createProduct(10,"smart",2000);
const p2=createProduct(11,"notebook",3000);
console.log("ID:",p1.id ,p1.name ,p1.price)
console.log(p2.id ,p2.name ,p2.price)
console.log(productPrice)

console.log("-----")
console.log(p1.getInfo())
