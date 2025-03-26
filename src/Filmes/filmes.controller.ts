import { Body, Controller, Get, Post } from "@nestjs/common";
import { FilmesEntity } from "./filmes.entity";
import { FilmesArmazenados } from "./filmes.dm";
import { verFilmesDTO } from "./dto/filmes.dto";
import { v4 as uuid } from "uuid";
import { ListaFilmeDTO } from "./dto/consulta.dto";
import { FilmeDTO } from "../Filmes/dto/id.dto";

@Controller('/filmes')
export class FilmesController{
	constructor( private cIFilmeArmazenador: FilmesArmazenados){
}

	@Post()
	async verFilme(@Body() dadosFilme: verFilmesDTO){
	var novoFilme = new FilmesEntity(uuid(), dadosFilme.nome, dadosFilme.duracao, dadosFilme.sinopse, dadosFilme.ano, dadosFilme.genero );
    this.cIFilmeArmazenador.verFilme(novoFilme);

    var filme = {


        dadosFilme : dadosFilme,
        status: 'Filme '
    }
    return  filme;
}
    @Get()
        async listaFilmes(){
            this.cIFilmeArmazenador.Filmes;

            const filmesListados = this.cIFilmeArmazenador.filmes;
            const listaRetorno = filmesListados.map(
                filmes => new ListaFilmeDTO(
                filmes.id,
                filmes.nome,
                filmes.duracao,
                filmes.sinopse,
                filmes.ano,
                filmes.genero
            )
        );
        return listaRetorno;
}
    @Get()
        async mostrarFilme(){
            this.cIFilmeArmazenador.Filmes;

            const mostrarFilme = this.cIFilmeArmazenador.filmes;
            const idRetorno = mostrarFilme.map(
                filmes => new FilmeDTO(filmes.id)
        );
        return idRetorno;
}
    @Get()
        async excluirID(){
            this.cIFilmeArmazenador.Filmes;

            const excluirID = this.cIFilmeArmazenador.filmes;
            const idExcluirRetorno = excluirID.map(
                filmes => new FilmeDTO(filmes.id)
        );
        return idExcluirRetorno;
    }
}
