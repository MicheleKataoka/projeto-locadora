
export class ListaFilmeDTO{
    constructor(
        readonly id: string,
        readonly nome: string,
        readonly duracao: number,
        readonly sinopse: string,
        readonly ano: string,
        readonly genero: string,
    ){}
}