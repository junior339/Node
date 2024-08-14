class Product{
        constructor(id,name,price){
        this.id=id;
        this.name=name;
        this.price=price;
        }//o contructor e onde eu posso encontrar as propriedades do meu produto 

getInfo(){
return `o id :${this.id} ;
nome: ${this.name} ;
preço:${this.price}`
        }
        //fora do constructor como voce pode ver eu tenho meus metodos
}
        // a classe é em meu ver o jeito mais moderno de se criar um objeto reutilizavel

    
function createProduct(id,name,price){
    return new Product(id,name,price)
}


module.exports = createProduct; //aqui como voce pode ver eu estou exportando minha função de uma maneira mais antiga
                                //veremos uma maneira mais moderna mais a frente