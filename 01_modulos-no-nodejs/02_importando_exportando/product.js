class Product{
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

function createProduct(id,name,price){
    return new Product(id,name,price)
}


module.exports = createProduct;