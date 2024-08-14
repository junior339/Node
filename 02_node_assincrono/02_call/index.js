console.log("primeira parte")

setTimeout(() => {
    console.log("espera de 3 segundos")
}, 3000);

setTimeout(()=>{
     console.log("espera de 0 segundos")
},0);

console.log("finalizando")

//como podemos notar aqui temos um tipo de codigo assincrono 
/*
  vou explicar abaixo
  primeiro o codigo executara a parte não assincrona
  então será 
  primeira parte 
  e depois finalizando 
  ae o codigo ira para a parte assincrona que é o timeout 
  na area do node api 
  ele vai pegar o codigo assin
  e vai me servir a terefa que terminar antes 
  o timeout 0
  e depois o timeout 3 

  note que mesmo ele sendo um timeout de 0 ele executa 
  depois que o codigo normal terminar 

*/