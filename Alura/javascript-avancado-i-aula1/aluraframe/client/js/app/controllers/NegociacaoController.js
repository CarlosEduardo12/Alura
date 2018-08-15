class NegociacaoController {
  constructor() {

          let $ = document.querySelector.bind(document);

          this.inputData = $('#data');
          this.inputQuantidade =  $('#quantidade');
          this.inputValor = $('#valor');
  }


  adiciona(event) {
    event.preventDefault();

    let helper = new DateHelper();

    let negociacao = new Negociacao(
        helper.textoParaData(this._inputData.value),
        this._inputQuantidade.value,
        this._inputValor.value
      );

    console.log(diaMesAno);
  }
}
