//teste de js oo

const pessoa={
    nome:"ana",
    idade:23,
    peso:57
}
//objetos são conjuntos chave e valor
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.peso);

console.log("----------------------------")
function funcionario(nome,idade){
      this.nome=nome;
      this.idade=idade;

      this.falar=()=>{
        console.log(`o nome do funcionario é:${this.nome} e tem ${this.idade} anos `)
      }

}

let f1=new funcionario("junior",26)
let f2=new funcionario("pedro",30)

console.log(f1.nome)
console.log(f2.nome)

f1.falar()
f2.falar()
//o que vimos acima e uma maneira de intanciar uma função construtora mas no ecma6

class FUNCIONARIO {
    constructor(nome,idade,peso){
        this.nome=nome;
        this.peso=peso;
        this.idade=idade;
    }
   //não preciso evidenciar que isso é uma função por estar fora do meu constructor
    getInfo(){
       console.log(`nome:${this.nome} idade:${this.idade} e peso:${this.peso}`)
    }
}







//todo objeto em javascript tem um prototype
//então eu posso adicionar ao meu construtor uma novo metodo ou propriedade

FUNCIONARIO.prototype.nascimento=function(){
      return`sua data de nascimento${this.idade}`
}

let F1= new FUNCIONARIO("carlos",67,87);
F1.getInfo()


function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  
  Pessoa.prototype.saudar = function() {
    return `Olá, meu nome é ${this.nome}`;
  };
  
  const pessoa1 = new Pessoa('marcos', 28);
  console.log(pessoa1.saudar()); // Olá, meu nome é Julia


//um dos pilares do oo e a herança

class veiculo {
  constructor(tipo){
    this.tipo=tipo
  }

  mover(){
    console.log(`${this.tipo} está se movendo`)
  }

}

class moto extends veiculo{
  constructor(marca,modelo){
     super('moto');//e o que define tipo
     this.marca=marca;
     this.modelo=modelo;

  }

  acelerar(){
    console.log(`marca:${this.marca} modelo:${this.modelo}`)
  }
}



const m1= new moto("yamaha","ybr");

m1.mover();
m1.acelerar();


console.log('--------------------------------------------------------')
class ContaBancaria {
  #saldo = 0; // Propriedade privada

  depositar(valor) {
    if (valor > 0) {
      this.#saldo += valor;
    }
  }

  getSaldo() {
    return this.#saldo;
  }
}

const minhaConta = new ContaBancaria();
minhaConta.depositar(100);
console.log(minhaConta.getSaldo()); // 100
//console.log(minhaConta.#saldo); // Erro: Propriedade privada



class Amigos{
    constructor(nome){
       this.nome=nome
    }
}

Amigos.prototype.falar=function(){
  console.log(`o meu nome é:${this.nome}`)
}

const A1= new Amigos("junior");
A1.falar();
