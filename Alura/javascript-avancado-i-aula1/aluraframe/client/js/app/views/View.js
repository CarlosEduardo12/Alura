class View {

    constructor(elemento) {

          this._elemento = elemento;
    }

    template() {
    throw new Error('O método template deve ser implementado');
}


    updaste(model) {

        this._elemento.innerHTML = this._template(model);
    }
}
