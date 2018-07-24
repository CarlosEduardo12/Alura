class Pessoa {

    constructor(nome, sobrenome) {

        this.nome = nome;
        this.sobrenome = sobrenome;
    }


    nomeCompleto(){
      console.log('Nome completo: ' + this.nome + ' ' + this.sobrenome);
    }


}
