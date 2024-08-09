export class Product{
    constructor(id,name,price){
    this.id=id;
    this.name=name;
    this.price=price;
    }

getInfo(){
return `o id :${this.id} ;
nome: ${this.name} ;
preço:${this.price}`
    }
}

export function createProduct(id,name,price){
return new Product(id,name,price)
}

export const productPrice=2000;


//module.exports = createProduct;