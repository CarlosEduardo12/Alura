class NegociacaoController {
  constructor() {

          let $ = document.querySelector.bind(document);

          this.inputData = $('#data');
          this.inputQuantidade =  $('#quantidade');
          this.inputValor = $('#valor');
  }


  adiciona(event) {

      event.preventDefault();

      this._listaNegociacoes.adiciona(this._criaNegociacao());
      this._limpaFormulario();

      console.log(this._listaNegociacoes.negociacoes);
  }

  _criaNegociacao() {
      return new Negociacao(
          DateHelper.textoParaData(this._inputData.value),
          this._inputQuantidade.value,
          this._inputValor.value);
    }

  _limpaFormulario() {
      this._inputData.value = '';
      this._inputQuantidade.value = 1;
      this._inputValor.value = 0.0

      this._inputData.focus();

              }
}
